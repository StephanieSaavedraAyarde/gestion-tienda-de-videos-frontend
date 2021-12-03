import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log("Add One: ", this.cartItemList);
    localStorage.setItem('carrito',  JSON.stringify(this.cartItemList));
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
        grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    // this.cartItemList.map((a:any, index:any)=>{
    //     if(product.id=== a.id){
    //       this.cartItemList.splice(index,1);
    //     }
    // })
    console.log("cart", this.cartItemList);
    console.log("produ", product);
    let newList = [];
    this.cartItemList.map(c => {
      if(c.filmId != product.filmId){
        newList.push(c)
      }
    })
    console.log("newList", newList);

    this.productList.next(newList);
    console.log("Remove One: ", newList);
    localStorage.setItem('carrito',  JSON.stringify(newList));
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
    console.log("Remove All: ", this.cartItemList);
    localStorage.setItem('carrito',  JSON.stringify(this.cartItemList));
  }

  itIsInCart(id: Number){
    this.cartItemList = JSON.parse(localStorage.getItem('carrito'));
    let auxboolean = false;
    console.log("Aca---------------", id);
    console.log(this.cartItemList);
    this.cartItemList.forEach(car => {

      console.log(car.filmId, id);
      if(car.filmId === id){
          auxboolean = true;
        }
    });

    return auxboolean;
  }
}
