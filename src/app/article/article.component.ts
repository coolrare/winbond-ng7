import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() item: any;

  constructor(public datasvc: DataService) { }

  ngOnInit() {
  }

  doDelete() {
    this.datasvc.doDelete(this.item.id);
  }

}
