import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  searchTerm: string;
  @Output() searchEmmiter = new EventEmitter<any>();

  constructor() {
  }

  emmitUser() {
  this.searchEmmiter.emit(this.searchTerm);
  }

  ngOnInit() {
  }

}
