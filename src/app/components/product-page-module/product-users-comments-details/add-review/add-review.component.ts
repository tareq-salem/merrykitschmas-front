import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentsService} from '../../../../services/comments/comments.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
    form;

    constructor(private http: HttpClient, private commentsService: CommentsService) {
    }

    ngOnInit() {
        // this.commentsService.add()
        //     .subscribe((res: any[]): void => {
        //     });
    }
}
