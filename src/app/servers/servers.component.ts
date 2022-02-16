import { Component, OnInit } from '@angular/core';

@Component({
  // the sqaure bracket selects by attribute
  // selector: '[app-servers]',

  // the . selects by class
  selector: 'app-servers',

  // inline template
  // template: `
  // <app-server></app-server>

  // <app-server></app-server>`,

  // external temolate
  templateUrl: './servers.component.html',

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //allowNewServer set to false to disable user from creating new server
  allowNewServer = false;

// to know the status of server when on click
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver','Testserver2']


  constructor() {
    // to set alloNewServer to true after 2sec
    setTimeout(
      () =>{this.allowNewServer = true },2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;

  }
  // method to output what the user entered(value)
  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event.target).value;


  }


}
