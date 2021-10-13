import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public fetchApiData: FetchApiDataService) { }

  user: any = {};

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    const currentUser = localStorage.getItem('user');
    this.fetchApiData.getUser(currentUser).subscribe((response: any) => {
      this.user = response;
      console.log(this.user);
      return this.user;
    });
  }
}

