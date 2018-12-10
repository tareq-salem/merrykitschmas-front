import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-users-comments',
  templateUrl: './product-users-comments.component.html',
  styleUrls: ['./product-users-comments.component.css']
})
export class ProductUsersCommentsComponent implements OnInit {
  comments = 1;

  constructor() { }

  ngOnInit() {
  }

  scrollPage() {
    // window.scrollTo(0, 3000);
    window.scroll(0, 2000);
    console.log('coucouille');
  }

}
