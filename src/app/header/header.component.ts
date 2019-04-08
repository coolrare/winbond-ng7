import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() sitename = 'Hello World';

  @Output() click_logo = new EventEmitter<any>();

  sitelogo = '/assets/images/logo.png';

  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  changeName(evt: MouseEvent) {
    this.click_logo.emit('clicked');
    this.counter++;
    console.log(evt);
    if (evt.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }

}
