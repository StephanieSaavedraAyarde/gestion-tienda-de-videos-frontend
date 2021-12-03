import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectCountry(id: Number){
    this.router.navigate(['/country',id]);
    console.log("Id Country: "+id);
    localStorage.setItem('idCountry', (id+""));
  }

}
