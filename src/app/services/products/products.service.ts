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
  urlProduct = undefined;

    request = {
        cat: '',
        sub: '',
        theme: '',
        stock: '',
        opt: '',
        orderby: ''
    };

    // =============================================================================
    products: any;
    private productsSubject = new Subject<any>();
    // =============================================================================

    ////////////////////////////////////////////////////////////////////////////////
    private subject = new Subject<any>();
    ////////////////////////////////////////////////////////////////////////////////

  constructor(private router: Router, private http: HttpClient) {
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

//   public sortProducts(sortParam) {
//     const productsSortedUrl = environment.url + '/products?orderby=' + sortParam;

//     return new Promise ((resolve, reject) => {
//       this.http.get(productsSortedUrl).subscribe(
//           (response: any[]) => { resolve(response); console.log(sortParam); },
//           (error) => reject(error)
//       );
//     });
//   }

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

    // =============================================================================
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
    // =============================================================================

    ////////////////////////////////////////////////////////////////////////////////
    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
    ////////////////////////////////////////////////////////////////////////////////

}
