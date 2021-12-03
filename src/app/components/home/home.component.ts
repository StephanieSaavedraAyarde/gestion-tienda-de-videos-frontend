import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {FilmModelServer} from "../../models/film.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
    premiere: any;
    lastweek: any;
    alltimes: any;
    public productList : any ;
    searchKey:string ="";
    idCountry: string  = localStorage.getItem('idCountry')!;
    id: Number = parseInt(this.idCountry);
    cartData: any;

    random: Number = Math.floor((Math.random()*(100-1))+1);

    constructor(private productService: ProductService, private cartService: CartService, private router: Router, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.productService.getPremiere(this.id).subscribe((data) => {
            console.log(data);
            this.premiere = data;
        });

        this.productService.getLastWeek(this.id).subscribe((data) => {
            console.log(data);
            this.lastweek = data;
        });

        this.productService.getAllTimes(this.id).subscribe((data) => {
            console.log(data);
            this.alltimes = data;
        });
    }

    addtocart(item: any){
      this.cartService.addtoCart(item);
    }

    verificar(id: Number){
      let aux = this.cartService.itIsInCart(id);
      console.log(id, aux);
      return aux;
    }

}


    
