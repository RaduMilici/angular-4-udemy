import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',   // select by element: <app-servers></app-servers>
  // selector: '[app-servers]', // select by attribute <div app-servers></div>
  // selector: '.app-servers',     // select by class <div class="app-servers"></div>
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout( () => { this.allowNewServer = true; }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created. Name is ${this.serverName}.`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
