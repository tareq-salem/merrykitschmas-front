import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
    orderby: string;

    constructor() {
    }

    receiveOrderby($event) {
        this.orderby = $event;
    }
}
