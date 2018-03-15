import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
//import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SellComponent } from './sell/sell.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  { path: 'buy', component: BuyComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'home', component: HomeComponent },
    { path: 'sell', component: SellComponent },

  { path: '', component: LoginComponent }];

@NgModule({
  declarations: [
    AppComponent,
    BuyComponent,
    LoginComponent,
    SellComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,MatInputModule,BrowserAnimationsModule,FormsModule,RouterModule,HttpClientModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
