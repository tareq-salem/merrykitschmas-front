import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-recommendations',
  templateUrl: './product-recommendations.component.html',
  styleUrls: ['./product-recommendations.component.css']
})
export class ProductRecommendationsComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/photos';
  category: any[];
  suggestions: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // On recupere tous les produits de la meme categorie en guise de suggestions
    this.http.get(this.url)
      .subscribe( (res: any[]) => {
        this.suggestions = res;
        this.category = res[1].title;
      });
  }

}
