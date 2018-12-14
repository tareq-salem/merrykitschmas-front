import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-recommendations',
  templateUrl: './product-recommendations.component.html',
  styleUrls: ['./product-recommendations.component.css']
})
export class ProductRecommendationsComponent implements OnInit {
  @Input() product: any[];

  url = 'https://jsonplaceholder.typicode.com/photos';
  category: any[];
  suggestions: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe( (res: any[]) => {
        this.suggestions = res;
        this.category = res[1].title;
      });
  }

}
