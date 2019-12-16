import { Component, OnInit, Input} from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {

  @Input('user') user : User;
  isCollapsed : boolean = true;

  constructor() { }

  toggleButtonClick(){
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {}
  

}