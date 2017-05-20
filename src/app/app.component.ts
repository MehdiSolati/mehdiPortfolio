import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public active: number = 0;
  @ViewChild('sidenav') sidenav: MdSidenav;
  public title: string = 'Michael Solati';
  public tabs: string[] = ['Portfolio', 'Skills', 'Experience', 'Community', 'Education'];
  constructor() { }

  public selectTab(tab: number): void {
    this.active = tab;
    this.sidenav.close();
  }

  public tabSwitch(tab: number): void {
    this.title = this.tabs[tab];
  }

  public toggleNav(): void {
    this.sidenav.toggle();
  }
}
