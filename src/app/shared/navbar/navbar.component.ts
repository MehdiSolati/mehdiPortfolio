import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
declare var window: any;

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MdSidenav;
  private _routes: any[] = [
    { name: 'Portfolio', path: ['/', 'portfolio'] },
    { name: 'Experience', path: ['/', 'experience'] },
    { name: 'Community', path: ['/', 'community'] },
    { name: 'Education', path: ['/', 'education'] }
  ];

  constructor() { }

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
}
