import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  results: any = "";
  api: string = "http://localhost/payu/";

  ngOnInit() {
    this.http.get(this.api + 'session.php').subscribe(data => {
      this.results = data['session'];
      if (this.results == false) {
        this.router.navigateByUrl('/login');
      }
    });
  }
  navto(to) {
    if (to == 1) {
      this.router.navigateByUrl('/profile');
    }
    if (to == 2) {
      this.router.navigateByUrl('/buy');
    }
    if (to == 3) {
      this.router.navigateByUrl('/sell');
    }
  }
}
