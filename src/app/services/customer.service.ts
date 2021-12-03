import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from '../models/customer.model';


@Injectable({ providedIn: 'root' })
export class CustomerService {

    actor: any = [];
    constructor(private http: HttpClient) { }

    register(user: Customer) {
        return this.http.post("http://localhost:8080/customer", user);
    }

    searchByTitle(country: Number, title: string) {
        console.log("TITLE: ", title)
        return this.http.get('http://localhost:8080/film/'+country+"/"+title);
    }

    searchByActor(country: Number, title: string) {
        this.actor= title.split[" "];
        console.log("ACTOR: ", this.actor[0], "|", this.actor[1])
        return this.http.get('http://localhost:8080/actor/'+country+"/"+this.actor[0]+"/"+this.actor[1]);
    }
}