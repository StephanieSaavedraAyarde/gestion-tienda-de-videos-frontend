import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CountryComponent } from './components/country/country.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VoucherComponent } from './components/voucher/voucher.component';
import { NoopAnimationsModule} from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ToastrModule} from 'ngx-toastr';
import { NgxSpinnerModule} from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
    CountryComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    IntroComponent,
    LoginComponent,
    RegisterComponent,
    VoucherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
