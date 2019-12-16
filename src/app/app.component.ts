import { Component } from '@angular/core';
import { User } from './address-book/user.model';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  user : User;
  
  constructor(){
    this.user = new User();
    this.user.name = "Tom";
    this.user.designation = "Software Developer";
    this.user.address = "Austin, Tx";
    this.user.phone = [
      '123-123-1234',
      '456-456-4567',
      '789-789-7899'
    ];

  }

}
