import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsService} from '../../services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    sizeNames: Array<string> = [];
    sizeQtes: Array<string> = [];
    product;

  constructor (
      private http: HttpClient,
      private productService: ProductsService
  ) { }

  ngOnInit() {
    this.productService.get()
        .subscribe( (res: any[]) => {
          this.product = res;
          this.getSizesNamesQtes();
        });
  }

  private getSizesNamesQtes() {
      for (let i = 0; i < this.product[0].productParameters.length; i++)  {
          this.sizeNames.push(this.product[0].productParameters[i].size);
          this.sizeQtes.push(this.product[0].productParameters[i].quantity);
      }
  }

}
