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
    this.isWomanOpen = false;
    this.isChildOpen = false;
    this.isThemeOpen = false;
    this.womanArrow = 'arrow_right';
    this.childrenArrow = 'arrow_right';
    this.themeArrow = 'arrow_right';
    this.manArrow = (this.manArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
    this.productsService.request.cat = 'Homme';
    this.productsService.request.sub = '';
    // console.log(this.productsService.constructRequest());
    this.sendRequestParam();
  }

  openManPullsMenu() {
    this.productsService.request.sub = 'Pull';
    this.sendRequestParam();
  }

  openManBonnetsMenu() {
    this.productsService.request.sub = 'Bonnet';
    this.sendRequestParam();
  }

  openManChaussettesMenu() {
    this.productsService.request.sub = 'Chaussette';
    this.sendRequestParam();
  }

  openWomanSubMenu() {
    this.isWomanOpen = !this.isWomanOpen;
    this.isManOpen = false;
    this.isChildOpen = false;
    this.isThemeOpen = false;
    this.manArrow = 'arrow_right';
    this.childrenArrow = 'arrow_right';
    this.themeArrow = 'arrow_right';
    this.womanArrow = (this.womanArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
    this.productsService.request.cat = 'Femme';
    this.productsService.request.sub = '';
    // console.log(this.productsService.constructRequest());
    this.sendRequestParam();
  }

  openWomanPullsMenu() {
    this.productsService.request.sub = 'Pull';
    this.sendRequestParam();
  }

  openWomanBonnetsMenu() {
    this.productsService.request.sub = 'Bonnet';
    this.sendRequestParam();
  }

  openWomanChaussettesMenu() {
    this.productsService.request.sub = 'Chaussette';
    this.sendRequestParam();
  }

  openChildrenSubMenu() {
    this.isChildOpen = !this.isChildOpen;
    this.isManOpen = false;
    this.isWomanOpen = false;
    this.isThemeOpen = false;
    this.manArrow = 'arrow_right';
    this.womanArrow = 'arrow_right';
    this.themeArrow = 'arrow_right';
    this.childrenArrow = (this.childrenArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
    this.productsService.request.cat = 'Enfant';
    this.productsService.request.sub = '';
    // console.log(this.productsService.constructRequest());
    this.sendRequestParam();
  }

  openChildPullsMenu() {
    this.productsService.request.sub = 'Pull';
    this.sendRequestParam();
  }

  openChildBonnetsMenu() {
    this.productsService.request.sub = 'Bonnet';
    this.sendRequestParam();
  }

  openChildChaussettesMenu() {
    this.productsService.request.sub = 'Chaussette';
    this.sendRequestParam();
  }

  openThemeSubMenu() {
    this.isThemeOpen = !this.isThemeOpen;
    this.isManOpen = false;
    this.isWomanOpen = false;
    this.isChildOpen = false;
    this.manArrow = 'arrow_right';
    this.womanArrow = 'arrow_right';
    this.childrenArrow = 'arrow_right';
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
        this.isManOpen = false;
        this.isWomanOpen = false;
        this.isChildOpen = false;
        this.isThemeOpen = false;
        this.manArrow = 'arrow_right';
        this.womanArrow = 'arrow_right';
        this.childrenArrow = 'arrow_right';
        this.themeArrow = 'arrow_right';
        this.productsService.request.cat = '';
        this.productsService.request.sub = '';
        this.productsService.request.theme = '';
        this.sendRequestParam();
    }
}
