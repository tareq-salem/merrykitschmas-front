import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  isManOpen = false;
  isWomanOpen = false;
  isChildOpen = false;
  isThemeOpen = false;

  manArrow = 'arrow_right';
  womanArrow = 'arrow_right';
  childrenArrow = 'arrow_right';
  themeArrow = 'arrow_right';
  constructor() { }

  ngOnInit() {
  }

  openManSubMenu() {
    this.isManOpen = !this.isManOpen;
    this.manArrow = (this.manArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
  }

  openWomanSubMenu() {
    this.isWomanOpen = !this.isWomanOpen;
    this.womanArrow = (this.womanArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
  }
  openChildrenSubMenu() {
    this.isChildOpen = !this.isChildOpen;
    this.childrenArrow = (this.childrenArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
  }
  openThemeSubMenu() {
    this.isThemeOpen = !this.isThemeOpen;
    this.themeArrow = (this.themeArrow === 'arrow_right') ? 'arrow_drop_down' : 'arrow_right';
  }
}
