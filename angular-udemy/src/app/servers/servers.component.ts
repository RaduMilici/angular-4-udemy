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
  serverCreated = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  servers: string[] = ['Test server 1', 'Test server 2'];

  constructor() {
    setTimeout( () => { this.allowNewServer = true; }, 500);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created. Name is ${this.serverName}.`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
