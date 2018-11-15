import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public headerTitle: string;
  public subTitle: string;

  constructor() {
    this.headerTitle = 'Angular 2Do';
    this.subTitle = 'Educational project for study Angular.';
  }

  ngOnInit() {
  }

}
