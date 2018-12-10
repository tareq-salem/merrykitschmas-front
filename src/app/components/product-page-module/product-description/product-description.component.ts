import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
    url = 'https://jsonplaceholder.typicode.com/photos';

    price = '10$';
    description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam repellendus sint vero voluptatem? Ab alias amet consectetur cupiditate, ducimus excepturi exercitationem iusto libero nulla odio quaerat, qui, quos voluptatum.';

    constructor(private http: HttpClient) { }

  ngOnInit() {
    // // A l'init du composant on recupere ses infos
    // this.http.get(this.url)
    //   .subscribe( (res) => {
    //       this.price = res[id].price;
    //       this.description = res[id].description;
    //   });
    }

}
