import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component'; // ^ typescript stuff
import { Server } from './server/server.model';
import { ServersComponent } from './servers/servers.component';


// angular part
@NgModule({ // SEE THE NGMODULE
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- for binding with [(ngModel)]
    HttpModule
  ],
  providers: [Server],
  bootstrap: [AppComponent]
})
export class AppModule { }


/// Explanations
/// Angular use 'components' to build web pages
/// and use modules to boundle different pieces (comp) into packages
/// We should tell angular which components to recongnize when it loads the index.html file
/// HEY: PART OF THAT MODULE IS THIS COMPONENT 
