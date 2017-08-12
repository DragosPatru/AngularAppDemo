import { Component } from '@angular/core';

@Component({ // component decorator
  selector: 'app-root', // selector is used in html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
AppComponent is the root component where we add or nest some  components 
Basis idea:
- each component has its own html template and maybe its own styling
- and more important : its own bussiness logic

When we create new components their selectors will not be added to the 
index.html file, they will be added to the app.component.html file

Because the whole application is bootstraped with the app component

*/

export class AppComponent {

}
