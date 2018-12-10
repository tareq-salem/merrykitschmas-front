import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cart-control',
  templateUrl: './cart-control.component.html',
  styleUrls: ['./cart-control.component.css']
})
export class CartControlComponent implements OnInit {
    isOnStock = 9;
    qteSelected;

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

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
      this.http.get('https://jsonplaceholder.typicode.com/albums') // TODO : Changer l'url
          .subscribe( (res: number) => {
              this.isOnStock = res[8].id; // TODO : res[idArticle].stockQteBDD ---- ici ---- idArticle = 65 && stockQteBDD = id
          });
    }

  // METHODES PUBLIQUE

    // Contraindre la quantite de produits selectionne a min
    public checkValue(qte): void {
        this.qteSelected = qte;
        console.log(qte.value);
        if (qte.value < 0) {
            qte.value = 0;
        } else if (qte.value > this.isOnStock) {
            qte.value = this.isOnStock;
        }
    }

    addToCart(cart) {
        console.log('ajouté au panié', cart);
        // TODO : On envoie les informations au service
    }

    navigateToCard() {
        // TODO : Ajouter la navigation vers le panier
        console.log('JE VAIS A LA PAGE PANIER');
    }

  // METHODES PRIVEES


  // GETTERS & SETTERS
  get size() {
      return this.form.get('size');
  }
  get fastShippingOption() {
      return this.form.get('fastShippingOption');
  }
  get stock() {
      return this.form.get('stock');
  }
  get quantities() {
      return this.form.get('quantities');
  }

}
