import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-picture',
  templateUrl: './product-picture.component.html',
  styleUrls: ['./product-picture.component.css']
})
export class ProductPictureComponent implements OnInit {
    @Input() picture: string;

    constructor() { }

    ngOnInit() {
    }

}
