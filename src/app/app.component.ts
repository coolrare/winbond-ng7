// tslint:disable: max-line-length
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'winbond-ng7';
  keyword = '';

  pageSize = 2;
  pageNo = 0;

  constructor(public datasvc: DataService) { }

  changePage(idx: number) {
    this.pageNo = idx - 1;
  }

  clearKeyword() {
    this.keyword = '';
  }

  doSearch(str) {
    console.log(str);
    this.keyword = str;
  }

  logoClicked(str: string) {
    this.keyword = str;
  }
}
