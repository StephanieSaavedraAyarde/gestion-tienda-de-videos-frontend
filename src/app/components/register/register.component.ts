import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CustomerService } from '../../services/customer.service';
import { AuthService } from '../../services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    idCountry: string  = localStorage.getItem('idCountry')!;
    id: Number = parseInt(this.idCountry);
    login: any;

    customer: any = {
        storeId: this.id,
        firstName: "",
        lastName: "",
        email:""
    }

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthService,
        private customerService: CustomerService,
        private alertService: AlertService
    ) { 
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }
    
    ngOnInit() {  }

    onSubmit(form: NgForm) {
        console.log(form.value);
        console.log("Customer: ", this.customer);
        this.customerService.register(this.customer);
        this.router.navigate(['/country', this.id]);       
    }
}
