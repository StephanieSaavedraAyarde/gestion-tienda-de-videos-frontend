import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public cartItemList: [];
  items: any;

  constructor() { }

  ngOnInit(): void {

    this.cartItemList = JSON.parse(localStorage.getItem('carrito'));
    this.items = this.cartItemList.length;
    console.log(this.cartItemList);this.cartItemList.length
    console.log()
  }

}
