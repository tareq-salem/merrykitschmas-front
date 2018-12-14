import { ProductsService } from './../../../services/products/products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-order-toolbar',
    templateUrl: './order-toolbar.component.html',
    styleUrls: ['./order-toolbar.component.css']
})
export class OrderToolbarComponent implements OnInit {

    dateArrow = 'arrow_drop_down';
    priceArrow = '';
    // orderby = 'ddesc';

    constructor(private productsService: ProductsService) { }

    @Output() orderbyEvent = new EventEmitter<string>();

    ngOnInit() {
        // this.sendOrderby();
        this.productsService.request.orderby = 'ddesc';
    }

    // onDateClick(event) {
    //     this.sendOrderby();
    //     this.priceArrow = '';
    //     if (this.dateArrow === 'arrow_drop_down') {
    //         this.dateArrow = 'arrow_drop_up';
    //         this.orderby = 'ddesc';
    //         this.productsService.request.orderby = 'ddesc';
    //     } else {
    //         this.dateArrow = 'arrow_drop_down';
    //         this.orderby = 'dasc';
    //         this.productsService.request.orderby = 'dasc';
    //     }
    //     this.applySelectColor(event);
    // }

    onDateClick(event) {
        // this.sendOrderby();
        this.applySelectColor(event);
        this.priceArrow = '';
        if (this.dateArrow === 'arrow_drop_down') {
            this.dateArrow = 'arrow_drop_up';
            // this.orderby = 'dasc';
            this.productsService.request.orderby = 'dasc';
        } else {
            this.dateArrow = 'arrow_drop_down';
            // this.orderby = 'ddesc';
            this.productsService.request.orderby = 'ddesc';
        }
        this.sendRequestParam();
    }

    onPriceClick(event) {
        this.applySelectColor(event);
        // this.sendOrderby();
        this.dateArrow = '';
        if (this.priceArrow === 'arrow_drop_down') {
            this.priceArrow = 'arrow_drop_up';
            // this.orderby = 'pdesc';
            this.productsService.request.orderby = 'pasc';
        } else {
            this.priceArrow = 'arrow_drop_down';
            // this.orderby = 'pasc';

            this.productsService.request.orderby = 'pdesc';
        }
        this.sendRequestParam();
    }

    // sendOrderby() {
    //     this.orderbyEvent.emit(this.orderby);
    // }

    applySelectColor(event) {
        const buttons = document.getElementsByClassName('order');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('isOrdering');
        }
        event.target.closest('button').classList.add('isOrdering');
    }

    sendRequestParam() {
        this.productsService.sendRequest();
    }
}
