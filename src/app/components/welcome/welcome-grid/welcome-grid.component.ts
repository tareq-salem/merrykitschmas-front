import { Component, OnInit, Input, OnChanges, SimpleChange  } from '@angular/core';
import { ProductsService } from './../../../services/products/products.service';

@Component({
  selector: 'app-welcome-grid',
  templateUrl: './welcome-grid.component.html',
  styleUrls: ['./welcome-grid.component.css']
})
export class WelcomeGridComponent implements OnInit, OnChanges {

    numberOfCols = 4;
    @Input() orderby: string;
    public products: any[];
    constructor(private productsService: ProductsService) { }

    ngOnChanges() {
        this.getProductsRequest(this.orderby);
    }

    ngOnInit() {
        this.onResize();
    }

    onResize() {
        if (window.innerWidth >= 1440) {
            this.numberOfCols = 4;
        } else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
            this.numberOfCols = 3;
        } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            this.numberOfCols = 2;
        } else if (window.innerWidth < 768) {
            this.numberOfCols = 1;
        } else {
            this.numberOfCols = 3;
        }
    }

    getProductsRequest(params) {
        this.productsService.sortProducts(params)
            .then((products: any[]) => this.products = products)
            .catch(error => console.log(error));
    }
}
