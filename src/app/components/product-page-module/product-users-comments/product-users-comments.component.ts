import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-users-comments',
  templateUrl: './product-users-comments.component.html',
  styleUrls: ['./product-users-comments.component.css']
})
export class ProductUsersCommentsComponent implements OnInit {
  @Input() commentQte: number;

  constructor() { }

  ngOnInit() {
  }

  public scrollPage(): void {
    window.scroll({
      top: 1120,
      left: 0,
      behavior: 'smooth',
    });
}
