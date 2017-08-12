import { Component, OnInit } from '@angular/core';
import {Server} from '../server/server.model';


@Component({
  //selector: '[app-servers]', // select by attribute or by class using .
  selector: 'app-servers',
  templateUrl: './servers.component.html', // at least one template must be present 
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created !';
  serverCreated = false;
  serverName = 'TestServerName';
  realServers: Server[] = [];
  servers: String[] = ['ServerTest', 'ServerTest2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  isAllowedNewServer() {
    console.log('clicked');
    this.allowNewServer = !this.allowNewServer;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created ! Name is ' + this.serverName;
    const newServer: Server = {name: this.serverName, status: 'Online'};
    this.realServers.push(newServer);
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
