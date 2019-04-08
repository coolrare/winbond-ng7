import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sitename = 'Hello World';

  sitelogo = '/assets/images/logo.png';

  constructor() { }

  ngOnInit() {
  }

  changeName() {
    this.sitename = 'The Will Will Web';
  }

}
