import { Component, OnInit } from '@angular/core';

const STYLE_INDEX = 4;

@Component({
  selector: 'app-toggle-display',
  templateUrl: './toggle-display.component.html',
  styleUrls: ['./toggle-display.component.css']
})
export class ToggleDisplayComponent implements OnInit {

  displayPassword = true;
  toggleTimestamps = [];

  constructor() { }

  ngOnInit() {
  }

  onDisplayClick(): void {
    this.toggleTimestamps.push(new Date());
    this.displayPassword = !this.displayPassword;
  }

  getBackgroundColor(index: number): string {
    return index > STYLE_INDEX ? 'blue' : 'white';
  }

  shouldBeWhite(index: number): boolean {
    return index > STYLE_INDEX;
  }

}
