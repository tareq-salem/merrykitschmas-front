import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentsService} from '../../../../services/comments/comments.service';
import {ProductsService} from '../../../../services/products/products.service';

@Component({
  selector: 'app-list-reviews',
  templateUrl: './list-reviews.component.html',
  styleUrls: ['./list-reviews.component.css']
})
export class ListReviewsComponent implements OnInit {
    comments: any[];
    avatar = 'https://www.pourquoidocteur.fr/media/article/thunbs/uploded_jimcarrey-1435850366.jpg';

    constructor(private productsService: ProductsService) {
    }

    ngOnInit() {
        this.comments = this.productsService.comments;
    }

}
