import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CartsService} from '../../../services/carts/carts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-control',
  templateUrl: './cart-control.component.html',
  styleUrls: ['./cart-control.component.css']
})
export class CartControlComponent implements OnInit {
    // Tailles
    @Input() sizeSQte: number;
    @Input() sizeMQte: number;
    @Input() sizeLQte: number;
    @Input() sizeXLQte: number;
    @Input() sizeXXLQte: number;

    // Qte disponible / selectionnee
    isOnStock;
    qteSelected;

    // Formulaire d'envoie au panier
    form = new FormGroup({
      size : new FormControl('', [
          Validators.required,
      ]),
      fastShippingOption : new FormControl(false),
      quantities : new FormControl('', [
          Validators.required,
          Validators.min(1),
          Validators.max(this.isOnStock)
      ]),
    });

    constructor(
        private cartsService: CartsService,
        private router: Router) {
    }

    ngOnInit() {
        this.isOnStock = this.sizeSQte + this.sizeMQte + this.sizeLQte + this.sizeXLQte + this.sizeXXLQte;
    }

  // METHODES PUBLIQUE
    // Contraindre la quantite de produits selectionne a min
    public checkStock(qte): void {
        this.qteSelected = qte;
        if (qte.value < 0) { // Si l'utilisateur selectionne une qte negative on force le form a zero
            qte.value = 0;
        } else if (qte.value > this.isOnStock) { // Si le user desire plus que le stock disponible on force a la qte max
            qte.value = this.isOnStock;
        }
    }

    // Ajouter au panier
    public addToCart(cart): void {
        this.cartsService.addProduct(cart);
    }

    // Aller au panier
    public navigateToCard(): void {
        this.router.navigate(['cart']);
    }

  // METHODES PRIVEES

  // GETTERS & SETTERS
  get size() {
      return this.form.get('size');
  }

  get quantities() {
      return this.form.get('quantities');
  }

}
