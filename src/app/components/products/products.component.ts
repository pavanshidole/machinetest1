import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  languageArr:Array<string>=["html","css","bootstrap","javascript","typescript","Angular","Node.js","Express.js",];

  constructor() { }

  ngOnInit(): void {
  }

}
