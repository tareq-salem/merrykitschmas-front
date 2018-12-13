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
    this.productsService.request.cat = 'Homme';
    console.log(this.productsService.constructRequest());
    this.sendRequestParam();
  }

  openWomanSubMenu() {
    this.isWomanOpen = !this.isWomanOpen;
    this.womanArrow = (this.womanArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
    this.productsService.request.cat = 'Femme';
    console.log(this.productsService.constructRequest());
    this.sendRequestParam();
  }
  openChildrenSubMenu() {
    this.isChildOpen = !this.isChildOpen;
    this.childrenArrow = (this.childrenArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
    this.productsService.request.cat = 'Enfant';
    console.log(this.productsService.constructRequest());
    this.sendRequestParam();
  }
  openThemeSubMenu() {
    this.isThemeOpen = !this.isThemeOpen;
    this.themeArrow = (this.themeArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
  }

    sendStockParam() {
        this.isStockChecked = !this.isStockChecked;
        if ( this.isStockChecked ) {
            this.productsService.request.stock = '1';
        } else {
            this.productsService.request.stock = '';
        }
        this.sendRequestParam();
    }

    sendDeliveryParam() {
        this.isDeliveryChecked = !this.isDeliveryChecked;
        if ( this.isDeliveryChecked ) {
            this.productsService.request.opt = 'Livraison%20Express';
        } else {
            this.productsService.request.opt = '';
        }
        this.sendRequestParam();
    }

    // ====================================================================================
    sendRequestParam() {
        this.productsService.sendRequest();
    }
    // ====================================================================================

    showAllProducts() {
        console.log('montrer tous les produits');
        this.productsService.request.cat = '';
        this.productsService.request.sub = '';
        this.productsService.request.theme = '';
        this.sendRequestParam();
    }
}
