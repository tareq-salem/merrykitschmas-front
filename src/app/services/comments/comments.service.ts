import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  url = 'http://localhost:4200/assets/commentDatas.json';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
        .pipe(
            map( res => res)
        );
  }

  create(comment): void {
      this.http.get(this.url, comment);
  }

}
