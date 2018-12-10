import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import {NavigationEnd, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlProduct = undefined;

  constructor(
      private router: Router,
      private http: HttpClient
  ) {
    // On recupere la valeur de l'url avec l'id du produit
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.urlProduct = environment.url + e.url;
      }
    });
  }

  // create(product) {
  //   this.http.post(this.urlProduct, product);
  // }

  getAll() {
    return this.http.get(environment.url + '/products?order=ddesc').pipe(
        map( res => res )
    );
  }

  get() {
    return this.http.get(this.urlProduct).pipe(
        map( res => res )
    );
  }

  update() {}

  delete() {}
}
