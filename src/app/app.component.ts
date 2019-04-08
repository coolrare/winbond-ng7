import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'winbond-ng7';
  keyword = '';

  clearKeyword() {
    this.keyword = '';
  }

  doSearch(str) {
    console.log(str);
    this.keyword = str;
  }
}
