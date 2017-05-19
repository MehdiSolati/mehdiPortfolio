import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public punchLine: string = 'My apps are dope, and I code dope shit.';
  private _punchLines: string[] = [
    '// A pirate trying to write epic code!',
    'Cirrus, alto cumulus, cirrostratus. Yea, I speak cloud. No biggie.',
    'Java is a language... Not a hot drink!'
  ];
  constructor() { }

  ngOnInit() {
    this._setPunchLine();
  }

  public goToURL(url: string): void {
    window.open(url, '_blank');
  }

  private _setPunchLine() {
    let quote = this._punchLines[Math.floor(Math.random() * this._punchLines.length)];
    this.punchLine = quote;
  }
}
