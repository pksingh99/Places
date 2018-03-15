import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) {}
show:number=0;
phone:number=null;
email:string="";
user:string="";
amount: number = 1000;
part: number = null;
oneBitcoin: number = null;
productinfo:string=null;
surl:string=null;
furl:string=null;
tax:number=null;
payableamount:number=null;
taxper:number=null;
results:any="";
usersecret:any="";
api:string="http://localhost/payu/";
  ngOnInit() {
    this.http.get(this.api+'session.php').subscribe(data => {
       this.results = data['session'];
       this.phone=data['phone'];
       this.email=data['email'];
       this.usersecret=data['usersecret'];
       this.user=data['firstname']+" "+data['lastname'];
       this.productinfo="bitcoin";
       this.surl="http://localhost/payu/success.php";
       this.furl="http://localhost/payu/failure.php";

       this.calculatePart();

       console.log(this.phone+this.user+this.email);

       if(this.results==false){
         this.router.navigateByUrl('/login');}
     });
     this.taxper=0.02;
     this.oneBitcoin = 1060052.72;
     this.calculatePart();
  }
payableamountcal(){
  this.oneBitcoin = 1060052.72;
  this.amount=parseInt(this.amount+"");
  this.tax=this.taxper*this.amount
  this.payableamount=this.amount+this.tax;
}


  calculatePart() {
    this.part =  this.amount/this.oneBitcoin;
    console.log(this.amount+"/"+this.oneBitcoin+"Calculating"+this.part);
  }

}
