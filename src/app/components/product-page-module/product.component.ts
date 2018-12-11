import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsService} from '../../services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    product;

  constructor (
      private http: HttpClient,
      private productService: ProductsService
  ) { }

  ngOnInit() {
    this.productService.get()
        .subscribe( (res: any[]) => {
          this.product = res;
          console.log(res);
        });
  }

}
