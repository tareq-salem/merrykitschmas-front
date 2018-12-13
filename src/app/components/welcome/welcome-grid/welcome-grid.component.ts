import { Component, OnInit, Input, OnChanges, OnDestroy  } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-welcome-grid',
  templateUrl: './welcome-grid.component.html',
  styleUrls: ['./welcome-grid.component.css']
})
export class WelcomeGridComponent implements OnInit, OnChanges, OnDestroy {

    numberOfCols = 4;
    @Input() orderby: string;
    public products: any[];

    // ===================================================================================================
    requestSubscription: Subscription;
    // ===================================================================================================

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    message: any;
    subscription: Subscription;
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    constructor(
        private router: Router,
        private productsService: ProductsService) {
            // ===================================================================================================
            this.requestSubscription = this.productsService.getRequest().subscribe(products => {this.products = products; });
            // ===================================================================================================
            ////////////////////////////////////////////////////////////////////////////////////////////////////
            this.subscription = this.productsService.getMessage().subscribe(message => { this.message = message; });
            ////////////////////////////////////////////////////////////////////////////////////////////////////
        }

    ngOnChanges() {
        this.getProductsRequest();
    }

    ngOnInit() {
        this.onResize();
        // this.productsService.request.subscribe(() => console.log('le cul de Yass sur la commode') );
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    ngOnDestroy() {
        this.requestSubscription.unsubscribe();
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////

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
        this.productsService.callRequest()
            .then((products: any[]) => this.products = products)
            .catch(error => console.log(error));
    }

    getProductRoute(id): void {
        this.router.navigate(['/product', id]);
    }

    onClickRequest() {
        const request = this.productsService.constructRequest();
        console.log(request);
        this.productsService.callRequest()
            .then((products: any[]) => this.products = products)
            .catch(error => console.log(error));
    }
}
