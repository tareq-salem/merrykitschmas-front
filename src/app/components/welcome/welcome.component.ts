import { CategoriesService } from './../../services/categories/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    numberOfCols = 4;
    public products: any[];

    constructor(private categoriesService: CategoriesService) {

    }

    ngOnInit() {
        this.onResize();

        // this.categoriesService.getAllProducts()
        // .subscribe( (res: any[]) => {
        //     this.products = res;
        // });

        this.categoriesService.getAllProducts()
            .then((products: any[]) => this.products = products)
            .catch(error => console.log(error));
    }

    onResize() {
        if (window.innerWidth >= 1440) {
            this.numberOfCols = 4;
        } else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
            this.numberOfCols = 3;
        } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            this.numberOfCols = 2;
        } else if (window.innerWidth < 768) {
            this.numberOfCols = 1;
        } else {
            this.numberOfCols = 3;
        }
    }
}
