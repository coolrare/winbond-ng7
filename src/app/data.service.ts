import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [];

  constructor(private http: HttpClient) {
    this.http.get<any[]>('/api/articles.json')
      .subscribe(d => {
        this.data = d;
      });
  }

  doDelete(id) {
    this.data = this.data.filter(x => x.id !== id);
  }
}
