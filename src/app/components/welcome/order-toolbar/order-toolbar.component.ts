import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-order-toolbar',
    templateUrl: './order-toolbar.component.html',
    styleUrls: ['./order-toolbar.component.css']
})
export class OrderToolbarComponent implements OnInit {

    dateArrow = 'arrow_drop_down';
    priceArrow = '';
    constructor() { }
    orderby = 'ddesc';

    @Output() orderbyEvent = new EventEmitter<string>();

    ngOnInit() {
        this.sendOrderby();
    }

    onDateClick() {
        this.priceArrow = '';
        if (this.dateArrow === 'arrow_drop_down') {
            this.dateArrow = 'arrow_drop_up';
            this.orderby = 'dasc';
        } else {
            this.dateArrow = 'arrow_drop_down';
            this.orderby = 'ddesc';
        }
    }

    onPriceClick() {
        this.dateArrow = '';
        if (this.priceArrow === 'arrow_drop_down') {
            this.priceArrow = 'arrow_drop_up';
            this.orderby = 'pasc';
        } else {
            this.priceArrow = 'arrow_drop_down';
            this.orderby = 'pdesc';
        }
    }

    sendOrderby() {
        this.orderbyEvent.emit(this.orderby);
    }

}
