import { Component, OnInit } from '@angular/core';
import { NGMeta } from 'ngmeta';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _punchLine: string;
  private _punchLines: string[] = [
    'My apps are dope, and I code dope shit.',
    '// A pirate trying to write epic code!',
    'Cirrus, alto cumulus, cirrostratus. Yea, I speak cloud. No biggie.',
    'Java is a language... Not a hot drink!'
  ];

  constructor(private _ngmeta: NGMeta) { }

  ngOnInit() {
    this._ngmeta.title = 'Michael Solati 👨‍💻☕🍺';
    this._punchLine = this._punchLines[Math.floor(Math.random() * this._punchLines.length)];
  }

  get punchLine(): string {
    return this._punchLine;
  }

  public goToURL(url: string): void {
    window.open(url, '_blank');
  }
}
