import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-picture',
  templateUrl: './product-picture.component.html',
  styleUrls: ['./product-picture.component.css']
})
export class ProductPictureComponent implements OnInit {
    url = 'https://jsonplaceholder.typicode.com/photos';
    image = 'http://www.sportune.fr/wp-content/uploads/2017/11/Adil-Rami-pull-Noel-OM-.jpg';

    constructor(private http: HttpClient) { }

    ngOnInit() {
        // // A l'init du composant on recupere l'image du produit
        // this.http.get(this.url)
        //     .subscribe( (res) => {
        //         this.image = res[0].url;
        //     });
    }

}
