import { Component, OnInit, OnDestroy, ViewChild, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MdSidenav, MdSidenavContainer } from '@angular/material';
declare var window: any;

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('container') container: MdSidenavContainer;
  @ViewChild('sidenav') sidenav: MdSidenav;
  private _routes: any[] = [
    { name: 'Portfolio', path: ['/', 'portfolio'] },
    { name: 'Articles', path: ['/', 'articles'] },
    { name: 'Experience', path: ['/', 'experience'] },
    { name: 'Education', path: ['/', 'education'] }
  ];

  constructor(private _router: Router) {
    this._router.events.subscribe((evt: any) => {
      this._scrollToTop(evt);
    });
  }

  ngOnInit() {
    (typeof window !== 'undefined') ? window.addEventListener('resize', () => {
      (window.innerWidth < 601) ? this.navClose() : null;
    }) : null;
  }

  ngOnDestroy() {
    (typeof window !== 'undefined') ? window.removeEventListener('resize') : null;
  }

  get routes(): any[] {
    return this._routes;
  }

  public navClose(): void {
    this.sidenav.close();
  }

  public navOpen(): void {
    (window.innerWidth < 601) ? this.sidenav.open() : null;
  }

  public navToggle(): void {
    (window.innerWidth < 601) ? this.sidenav.toggle() : null;
  }

  private _scrollToTop(evt: any): void {
    if (!(evt instanceof NavigationEnd) || evt.url.includes('#') || (typeof window === 'undefined')) {
      return;
    }
    this.container['_element'].nativeElement.lastChild.scrollTop = 0;
  }
}