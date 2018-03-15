import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { URLSearchParams,RequestOptions } from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  email: string = "rohit24naik@gmail.com";
  password: string = "abcd";
  results: boolean;
  api: string = "http://localhost/payu/"

  ngOnInit() {
    this.http.get(this.api + 'session.php').subscribe(data => {
      this.results = data['session'];
      if (this.results == true) {
        this.router.navigateByUrl('/home');
      }
    });
  }




  verify() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      if (this.password != "") {
        const body = { email: this.email, password: this.password, hmm: 'fg' };
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('email', this.email);
        urlSearchParams.append('password', this.password);
        console.log(urlSearchParams);
      //  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      //  let options = new RequestOptions({ headers: headers });
        this.http.get(this.api + 'get_user.php?email='+this.email+'&password='+this.password).subscribe(data => {
          this.results = data['result'];
          if (this.results == false) {
            this.router.navigateByUrl('/login');
          }
          if (this.results == true) {
            this.router.navigateByUrl('/home');
          }
        });

      }
    }
  }
}
