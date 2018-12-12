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

    constructor(private productsService: ProductsService) { }
    orderby = 'ddesc';

    @Output() orderbyEvent = new EventEmitter<string>();

    ngOnInit() {
        this.sendOrderby();
        this.productsService.request.orderby = 'ddsc';
    }

    onDateClick(event) {
        this.sendOrderby();
        this.priceArrow = '';
        if (this.dateArrow === 'arrow_drop_down') {
            this.dateArrow = 'arrow_drop_up';
            this.orderby = 'dasc';
            this.productsService.request.orderby = 'ddsc';
        } else {
            this.dateArrow = 'arrow_drop_down';
            this.orderby = 'dasc';
        }
        this.applySelectColor(event);
    }

    onPriceClick(event) {
        this.sendOrderby();
        this.dateArrow = '';
        if (this.priceArrow === 'arrow_drop_down') {
            this.priceArrow = 'arrow_drop_up';
            this.orderby = 'pasc';
        } else {
            this.priceArrow = 'arrow_drop_down';
            this.orderby = 'pdesc';
        }
        this.applySelectColor(event);
    }

    sendOrderby() {
        this.orderbyEvent.emit(this.orderby);
    }

    applySelectColor(event) {
        const buttons = document.getElementsByClassName('order');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('isOrdering');
        }
        event.target.closest('button').classList.add('isOrdering');
    }
}
