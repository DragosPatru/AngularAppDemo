// tell angular that this is not a normal typescript class
import { Component } from '@angular/core';

@Component({
    selector: 'app-server', // html tag used to be able to use this component in other components html file
    templateUrl: './server.component.html',
    styles: [`
            .online { color: white }
    `]
})
// In order to use it we should change something in our app module
export class ServerComponent {
    serverId = 10;
    serverStatus: string = 'offline';
    name: String = '';

    getServerStatus() {
        return this.serverStatus;
    }
    
    constructor () {
        let random = Math.random();
        console.log(random);
        this.serverId = random;
        this.serverStatus = random > 0.5 ? 'online' : 'offline';
     }

     getColor() {
         return this.serverStatus === 'online' ? 'green' : 'red';
     }
}
