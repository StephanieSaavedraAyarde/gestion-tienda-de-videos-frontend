import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public name: string;
  public description: string;
  public searchTerm !: string;
  public total: any;
  public cartItemList : any =[];
  idCountry: string  = localStorage.getItem('idCountry')!;
  id: Number = parseInt(this.idCountry);
  login: Number;
  isLogged:boolean;

  constructor(private cartService : CartService, private router: Router,  private customerService: CustomerService,private authenticationService: AuthService) { }

  ngOnInit(): void {
    
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
      this.name = res.title;
      this.description = res.description;
      this.cartItemList = res;
    })

    this.cartItemList = JSON.parse(localStorage.getItem('carrito'));
    this.totalItem = this.cartItemList.length;
    this.total = this.cartService.getTotalPrice();
    this.login = parseInt(localStorage.getItem('login'));
  }

  removeCartItem(item: any){
    this.cartService.removeCartItem(item);
  }

  cart(){
    this.router.navigate(['/cart']);
    console.log("Nos vamos al carrito");
    console.log("Carrito: ", this.cartItemList);
  }

  return(){
    this.router.navigate(['/country',this.id]);
    console.log("Id Country: "+this.id);
  }

  verificacion(){
    if(this.login === 1){
      this.isLogged = true;
    }
  }

  logout(){
    this.authenticationService.logout();
    this.isLogged = false;
    localStorage.setItem('login', 0+"");
  }

  onSubmit(value, opcion) {
    console.log("Customer: ", value);
    if(opcion === 0){
      this.customerService.searchByTitle(this.id, value);
      this.router.navigate(['/search',]);  
    }else{
      if(opcion === 1){
        this.customerService.searchByActor(this.id, value);
        this.router.navigate(['/search',]);  
      }
    }
         
}
  
}
