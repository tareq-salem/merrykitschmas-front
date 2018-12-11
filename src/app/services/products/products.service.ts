import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { NavigationEnd, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlProduct = undefined;

  constructor(private router: Router, private http: HttpClient) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.urlProduct = environment.url + e.url;
        console.log('URL PRODUIT : ', this.urlProduct);
      }
    });
  }


  public sortProducts(sortParam) {
    const productsSortedUrl = environment.url + '/products?orderby=' + sortParam;
    console.log(productsSortedUrl);

    return new Promise ((resolve, reject) => {
      this.http.get(productsSortedUrl).subscribe(
          (response: any[]) => { resolve(response); },
          (error) => reject(error)
      );
    });
  }

  /* -------------------------- CRUD -------------------------- */
  // create(product) {
  //   this.http.post(this.urlProduct, product);
  // }

  getAll() {
    return this.http.get(environment.url + '/products?order=ddesc').pipe(
        map( res => res )
    );
  }
  // VERSION JULIEN
  // getAllProducts() {
  //   const allProducts = environment.url + '/products';
  //
  //   return new Promise ((resolve, reject) => {
  //     this.http.get(allProducts).subscribe(
  //         (response: any[]) => {
  //           resolve(response);
  //         },
  //         (error) => reject(error)
  //     );
  //   });
  // }

  get() {
    return this.http.get(this.urlProduct).pipe(
        map( res => res )
    );
  }

  update() {}

  delete() {}
}
