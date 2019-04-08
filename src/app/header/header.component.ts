import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sitename = 'Hello World';

  sitelogo = '/assets/images/logo.png';

  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  changeName(evt: MouseEvent) {
    this.counter++;
    console.log(evt);
    if (evt.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }

}
