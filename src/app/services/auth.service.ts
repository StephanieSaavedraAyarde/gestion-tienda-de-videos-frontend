import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Customer } from '../models/customer.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<Customer>;
    public currentUser: Observable<Customer>;
    usuario: any;
    id: Number;
    idCountry: string;
    answer: boolean;

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Customer {
        return this.currentUserSubject.value;
    }

    login(user: string) {
        return this.http.get<any>("http://localhost:8080/login/"+ user)
            .pipe(map(user => {
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    auth(user: String) {
        return this.http.get<any>("http://localhost:8080/login/"+ user)
            .pipe(map(data => {
                localStorage.setItem('currentUser', JSON.stringify(data));
                this.currentUserSubject.next(data);
                this.usuario = data;
                console.log(data);
                console.log(JSON.stringify(data));
                return data;
            }));
    }

    /*login(user: String){
        this.usuario = this.login(user);
        if((this.usuario.length)>0){
            console.log("ENTRAMOS!");
            localStorage.setItem('usuario',  JSON.stringify(this.usuario));
            return true;
        }else{
            console.log("Datos Incorrectos");
            return false;
        }
    }*/

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}