import { Component, OnInit, Input, OnChanges  } from '@angular/core';
import {ProductsService} from '../../../services/products/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome-grid',
  templateUrl: './welcome-grid.component.html',
  styleUrls: ['./welcome-grid.component.css']
})
export class WelcomeGridComponent implements OnInit, OnChanges {

    numberOfCols = 4;
    @Input() orderby: string;
    public products: any[];
    constructor(
        private router: Router,
        private productsService: ProductsService) { }

    ngOnChanges() {
        this.getProductsRequest();
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

    getProductsRequest(): void {
        // this.productsService.sortProducts(params)
        //     .then((products: any[]) => this.products = products)
        //     .catch(error => console.log(error));
        this.productsService.sendRequest()
            .then((products: any[]) => this.products = products)
            .catch(error => console.log(error));
    }

    getProductRoute(id): void {
        this.router.navigate(['/product', id]);
    }
}
