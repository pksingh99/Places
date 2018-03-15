import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {Response,Headers} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  phone:number=null;
  email:string="";
  user:string="";
  amount: number = 1000;
  part: number = null;
  oneBitcoin: number = null;
  bitcoin:string=null;
  surl:string=null;
  furl:string=null;
  tax:number=null;
  payableamount:number=null;
  taxper:number=null;
  results:any="";
  usersecret:any="";
  api:string="http://localhost/payu/"
  constructor(public http:HttpClient,private router: Router) { }

  ngOnInit() {
    this.http.get(this.api+'session.php').subscribe(data => {
       this.results = data['session'];
       this.phone=data['phone'];
       this.email=data['email'];
       this.usersecret=data['usersecret'];
       this.user=data['firstname']+" "+data['lastname'];
       this.bitcoin=data['bitcoin'];
       console.log(this.phone+this.user+this.email);

       if(this.results==false){
         this.router.navigateByUrl('/login');}
     });
  }

}
