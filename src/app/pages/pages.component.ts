import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line: typedef
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    init_plugins();
  }
}
