import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CartsService} from '../../../services/carts/carts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-control',
  templateUrl: './cart-control.component.html',
  styleUrls: ['./cart-control.component.css']
})
export class CartControlComponent implements OnInit, OnChanges {
    @Input() sizeNames: Array<string>;
    @Input() sizeQtes: Array<number>;

    availableStockForSize: number;
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
          Validators.max(this.availableStockForSize)
      ]),
    });

    constructor(private cartsService: CartsService, private router: Router) {
    }

    ngOnChanges() {
        this.form.valueChanges.subscribe( () => {
            const range = this.sizeNames.indexOf(this.size.value);
            this.availableStockForSize = this.sizeQtes[range];
        });
    }

    ngOnInit() {
        for (let i = 0; i < this.sizeQtes.length; i++ ) {
            this.totalStock += this.sizeQtes[i];
        }
    }

    public compareStockAndQtesSelected(qte): void {
        this.qteSelected = qte;

        if (qte.value < 0) {
            qte.value = 0;
        } else if (qte.value > this.availableStockForSize) {
            qte.value = this.availableStockForSize;
        }
    }

    public resetQtesSelected(qte) {
        qte.value = 1;
    }

    public addToCart(cart): void {
        this.cartsService.addProduct(cart);
    }

    public navigateToCard(): void {
        this.router.navigate(['cart']);
    }

    // GETTERS & SETTERS
    get size() { return this.form.get('size'); }
    get quantities() { return this.form.get('quantities'); }
}
