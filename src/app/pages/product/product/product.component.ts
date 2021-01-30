import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public items: any[] = [];

  constructor() { }

  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.displayProducts(json);
      });
  }

  public displayProducts(data) {
    this.items = data;
  }

}
