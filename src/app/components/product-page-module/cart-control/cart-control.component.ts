import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CartsService} from '../../../services/carts/carts.service';
import {ProductsService} from '../../../services/products/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-control',
  templateUrl: './cart-control.component.html',
  styleUrls: ['./cart-control.component.css']
})
export class CartControlComponent implements OnInit, OnChanges {
    sizeNames: Array<string>;
    sizeQtes: Array<number>;

    availableStockPerSizes: number;
    totalStock = 0;
    qteSelected: number;

    form = new FormGroup({
      size : new FormControl('', [
          Validators.required,
      ]),
      fastShippingOption : new FormControl(false),
      quantities : new FormControl('', [
          Validators.required,
          Validators.min(1),
          Validators.max(this.availableStockPerSizes)
      ]),
    });

    constructor(
        private cartsService: CartsService,
        private productsService: ProductsService,
        private router: Router) {
    }

    ngOnChanges() {
    }

    ngOnInit() {
        this.sizeQtes = this.productsService.sizeQtes;
        this.sizeNames = this.productsService.sizeNames;
        this.getTotalStock();
        this.getStockBySizes();
    }

    /* --------------------------- STOCK AND QTES CONTROL --------------------------- */
    private getStockBySizes() {
        this.form.valueChanges.subscribe( () => {
            const range = this.sizeNames.indexOf(this.size.value);
            this.availableStockPerSizes = this.sizeQtes[range];
        });
    }
    private getTotalStock() {
        for (let i = 0; i < this.sizeQtes.length; i++ ) {
            this.totalStock += this.sizeQtes[i];
        }
    }
    public compareTotalStockAndQtesSelected(qte): void {
        this.qteSelected = qte;
        if (qte.value < 0) {
            qte.value = 0;
        } else if (qte.value > this.availableStockPerSizes) {
            qte.value = this.availableStockPerSizes;
        }
    }
    public resetQtesSelected(qte) {
        qte.value = 1;
    }
    /* --------------------------- ADD & GO TO SHOPPING-CART --------------------------- */
    public addToCart(cart): void {
        this.cartsService.addProduct(cart);
    }
    public navigateToCard(): void {
        this.router.navigate(['cart']);
    }
    /* --------------------------- GETTERS & SETTERS --------------------------- */
    get size() {
        return this.form.get('size');
    }
    get quantities() {
        return this.form.get('quantities');
    }
}
