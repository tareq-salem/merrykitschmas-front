import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentsService} from '../../../../services/comments/comments.service';

@Component({
  selector: 'app-list-reviews',
  templateUrl: './list-reviews.component.html',
  styleUrls: ['./list-reviews.component.css']
})
export class ListReviewsComponent implements OnInit {
    datas: any[];

    constructor(
        private http: HttpClient,
        private commentsService: CommentsService) {
    }

    ngOnInit() {
        this.commentsService.getAll()
            .subscribe((res: any[]): void => {
                this.datas = res;
            });
    }

}
