import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

    isManOpen = false;
    isWomanOpen = false;
    isChildOpen = false;
    isThemeOpen = false;
    isStockChecked = false;
    isDeliveryChecked = false;

    manArrow = 'arrow_right';
    womanArrow = 'arrow_right';
    childrenArrow = 'arrow_right';
    themeArrow = 'arrow_right';

  constructor(private productsService: ProductsService ) { }

  ngOnInit() {
  }

  openManSubMenu() {
    this.isManOpen = !this.isManOpen;
    this.manArrow = (this.manArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
  }

  openWomanSubMenu() {
    this.isWomanOpen = !this.isWomanOpen;
    this.womanArrow = (this.womanArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
  }
  openChildrenSubMenu() {
    this.isChildOpen = !this.isChildOpen;
    this.childrenArrow = (this.childrenArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
  }
  openThemeSubMenu() {
    this.isThemeOpen = !this.isThemeOpen;
    this.themeArrow = (this.themeArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
  }

    sendStockParam() {
        this.isStockChecked = !this.isStockChecked;
        if ( this.isStockChecked ) {
            this.productsService.request.stock = '1';
            console.log('stock checked : ' + this.productsService.getFullRequest());
        } else {
            this.productsService.request.stock = '';
            console.log('stock unchecked ' + this.productsService.getFullRequest());
        }
    }

    sendDeliveryParam() {
        this.isDeliveryChecked = !this.isDeliveryChecked;
        if ( this.isDeliveryChecked ) {
            this.productsService.request.opt = 'Livraison%20Express';
            console.log('delivery checked : ' + this.productsService.getFullRequest());
        } else {
            this.productsService.request.opt = '';
            console.log('delivery unchecked ' + this.productsService.getFullRequest());
        }
    }
}
