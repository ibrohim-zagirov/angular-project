import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'study';
  public users: User[] = [];

  constructor(
    private http: HttpClient
  ) {
  }

  public logUsers() {
    console.log(this.users)
  }

  public loadUsers() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((response: User[]) => this.users = response)
  }
}
