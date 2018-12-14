import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any;
  private productsSubject = new Subject<any>();
  request = {
    cat: '',
    sub: '',
    theme: '',
    stock: '',
    opt: '',
    orderby: ''
  };
  
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
      }
    });
  }

  public constructRequest() {
        let url = environment.url + '/products?';
        if (this.request.orderby !== '') { url += 'orderby=' + this.request.orderby; }
        if (this.request.cat !== '') { url += '&cat=' + this.request.cat; }
        if (this.request.sub !== '') { url += '&sub=' + this.request.sub; }
        if (this.request.stock !== '') { url += '&stock=' + this.request.stock; }
        if (this.request.opt !== '') { url += '&opt=' + this.request.opt; }
        return url;
  }

// public call request
  public callRequest() {
      const url = this.constructRequest();
      return new Promise ((resolve, reject) => {
        this.http.get(url).subscribe(
            (response: any[]) => { resolve(response); },
            (error) => reject(error)
        );
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
  
  /* -------------------------- SORT PRODUCTS -------------------------- */
//   public sortProducts(sortParam) {
//     const productsSortedUrl = environment.url + '/products?orderby=' + sortParam;
//     return new Promise ((resolve, reject) => {
//       this.http.get(productsSortedUrl).subscribe(
//           (response: any[]) => { resolve(response); console.log(sortParam); },
//           (error) => reject(error)
//       );
//     });
//   }
  
    sendRequest() {
        this.constructRequest();
        this.callRequest()
        .then((products: any[]) => {
            this.products = products;
            console.log(this.products.length + ' produits affichés (oui faut me croire sinon tu comptes)');
            this.productsSubject.next(this.products); })
        .catch(error => console.log(error));
    }

    getRequest(): Observable<any> {
        return this.productsSubject.asObservable();
    }

  /* -------------------------- SPECIFIC BEHAVIOR -------------------------- */
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
}
