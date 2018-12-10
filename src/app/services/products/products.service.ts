import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    uri = 'http://localhost:8000/';
    getDatas: any[];

    constructor(private http: HttpClient) { }

    getAllProducts() {
        const allProducts = this.uri + 'products/';

        return new Promise ((resolve, reject) => {
            this.http.get(allProducts).subscribe(
                (response: any[]) => {
                    this.getDatas = response;
                    resolve(this.getDatas);
                },
                (error) => reject(error)
            );
        });
    }

    sortProducts(sortParam) {
        const productsSortedUrl = this.uri + 'products?orderby=' + sortParam;

        return new Promise ((resolve, reject) => {
            this.http.get(productsSortedUrl).subscribe(
                (response: any[]) => {
                    this.getDatas = response;
                    resolve(this.getDatas);
                },
                (error) => reject(error)
            );
        });
    }
}
