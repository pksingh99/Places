import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(public http:HttpClient,public router:Router) { }
  available: number = null;
  selling: number = null;
  sellpercentage: number = null;
  inhand: number = null;
  sellingPrice:number =null;
  results:boolean=false;
  usersecret:any="";
  bitcoin:number=null;
  api:string="http://localhost/payu/"
 show:boolean=true;
  ngOnInit() {
    this.http.get(this.api+'session.php').subscribe(data => {
       this.results = data['session'];
       this.usersecret=data['usersecret'];
       this.bitcoin=data['bitcoin'];
       this.inhand = 0.007000;
       this.available = 0.005000;
       this.selling = 0.0025000;
       this.sellingPrice = 1000;
       if(this.results==false){
         this.router.navigateByUrl('/login');
       }
       else{
         this.show=false;
       }
     });
  }

  howMuch() {

  }
  putForSell() {

    console.log("Ready To sell");
    console.log(this.usersecret+this.bitcoin+this.inhand+this.available+this.selling+this.sellingPrice);
  }

  verifySell() {
    if (this.available >= this.selling) {

this.putForSell();
    }

  }
}
