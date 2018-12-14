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

  sizeQtes: Array<number> = [];
  sizeNames: Array<string> = [];

  constructor(private router: Router, private http: HttpClient) {
    this.getUrlProduct();
  }

  /* -------------------------- GET URL -------------------------- */
  private getUrlProduct() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.urlProduct = environment.url + e.url;
        console.log('URL PRODUIT : ', this.urlProduct);
      }
    });
  }

  /* -------------------------- CRUD -------------------------- */
  getAll() {
    return this.http.get(environment.url + '/products?order=ddesc').pipe(
        map( res => res )
    );
  }

  get() {
    return this.http.get(this.urlProduct).pipe(
        map( (res) => {
          this.getProductSizesQtes(res);
          this.getProductSizesNames(res);
          return res;
        })
    );
  }
  private getProductSizesQtes (res) {
    this.sizeQtes = [];
    for ( let i = 0; i < res[0].productParameters.length; i++ )  {
      this.sizeQtes.push( res[0].productParameters[i].quantity );
    }
    console.log('this.sizeQtes : ', this.sizeQtes);
  }
  private getProductSizesNames (res) {
    this.sizeNames = [];
    for ( let i = 0; i < res[0].productParameters.length; i++ )  {
      this.sizeNames.push( res[0].productParameters[i].size );
    }
  }

  /* -------------------------- SORT PRODUCTS -------------------------- */
  public sortProducts(sortParam) {
    const productsSortedUrl = environment.url + '/products?orderby=' + sortParam;
    return new Promise ((resolve, reject) => {
      this.http.get(productsSortedUrl).subscribe(
          (response: any[]) => { resolve(response); },
          (error) => reject(error)
      );
    });
  }
}
