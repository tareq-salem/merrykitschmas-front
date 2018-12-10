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
    @Input() orderBy: string;

    ngOnInit() {
    }

    onDateClick() {
        this.priceArrow = '';
        if (this.dateArrow === 'arrow_drop_down') {
            this.dateArrow = 'arrow_drop_up';
            this.orderBy = 'recentDate';
        } else {
            this.dateArrow = 'arrow_drop_down';
            this.orderBy = 'olderDate';
        }
        console.log(this.orderBy);
    }

    onPriceClick() {
        this.dateArrow = '';
        if (this.priceArrow === 'arrow_drop_down') {
            this.priceArrow = 'arrow_drop_up';
            this.orderBy = 'increasingPrice';
        } else {
            this.priceArrow = 'arrow_drop_down';
            this.orderBy = 'decreasingPrice';
        }
        console.log(this.orderBy);
    }

}
