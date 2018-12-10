import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isSideMenuVisible: boolean;
    isProductPage: boolean;

    constructor(private router: Router) {
    }

    ngOnInit() {
    this.router.events.subscribe(e => {
        if (e instanceof NavigationEnd) {
            this.isSideMenuVisible = e.url === '/';
        }
    });
    }
}
