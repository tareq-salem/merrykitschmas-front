import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http: HttpClient) { }

  addProduct(cart): void {
    console.log(cart); // TODO : Commenter ca et Decommenter ci-dessous qd BDD OK
    // this.http.post(environment.url + 'add=' + cart).pipe(
    //     map( res => res )
    // );
  }
}
