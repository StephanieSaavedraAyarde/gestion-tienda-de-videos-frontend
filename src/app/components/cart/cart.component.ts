import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items : number = 0;
  public title: string;
  public cartItemList : [];
  public total: any;

  constructor(private cartService : CartService, private router: Router) { }

  idCountry: string  = localStorage.getItem('idCountry')!;
  id: Number = parseInt(this.idCountry);
  login: Number;
  descuentos: any;
  saldo: any;
  days=2;
  sub: any;
  subTotal: any;
  
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.items = res.length;
      this.title = res.title;
      
      this.cartItemList = res;
    })

    this.items = this.cartItemList.length;
    this.total = this.cartService.getTotalPrice();

    this.cartItemList = JSON.parse(localStorage.getItem('carrito'));
    this.login = parseInt(localStorage.getItem('login'));
  }

  return(){
    this.router.navigate(['/country',this.id]);
    console.log("Id Country: "+this.id);
  }

  removeToCart(item: any){
    this.cartService.removeCartItem(item);
  }

  checkout(){

    this.login = parseInt(localStorage.getItem('login'));
        if(this.login == 1){
          this.router.navigate(['/checkout']);
          console.log("Nos vamos a checkout");
        }else{
          this.router.navigate(['/login']);
          console.log("Nos vamos a checkout");
        }
  }

  getTotal(){
    this.sub = this.cartItemList.length * 0.99;
    this.subTotal = this.sub * this.days;
    this.descuentos = 0;
    this.saldo=0;

    if(this.subTotal<=10){
      this.saldo = this.subTotal;
    }else{
      if(this.subTotal>10 && this.subTotal<=15){
        this.descuentos = this.subTotal *0.10;
        this.saldo = this.subTotal - this.descuentos;
      }else{
        if(this.subTotal>15 && this.subTotal<=20){
          this.descuentos = this.subTotal *0.15;
          this.saldo = this.subTotal - this.descuentos;
        }else{
          if(this.subTotal>20){
            this.descuentos = this.subTotal *0.20;
            this.saldo = this.subTotal - this.descuentos;
          }
        }
      }
    }
    
    console.log("Saldo", this.saldo);
    return this.saldo;
  }  

}
