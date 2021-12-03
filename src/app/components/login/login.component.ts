import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: String;
    idCountry: string  = localStorage.getItem('idCountry')!;
    id: Number = parseInt(this.idCountry);
    answer: any;

    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) {
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/login']);
        }
    }

    ngOnInit() { }

    onSubmit(form: NgForm) {
        console.log(form.value);
        console.log("Customer: ", this.email);
        //this.answer = this.authenticationService.login(this.email);
        console.log(this.answer);
        if(this.answer===true){
            console.log("Verificado")
        }else{
            console.log("ACCESO DENEGADO")
        }
    }
}

