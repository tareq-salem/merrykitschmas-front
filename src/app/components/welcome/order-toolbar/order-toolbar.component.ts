import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-order-toolbar',
    templateUrl: './order-toolbar.component.html',
    styleUrls: ['./order-toolbar.component.css']
})
export class OrderToolbarComponent implements OnInit {

    dateArrow = 'arrow_drop_down';
    priceArrow = '';
    constructor() { }
    @Input() orderby = 'ddesc';

    ngOnInit() {
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

}
