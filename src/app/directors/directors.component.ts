import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.scss']
})
export class DirectorsComponent implements OnInit {

  isLoading = false;
  directors: any[] = [];

  constructor(public fetchApiData: FetchApiDataService) { }

  ngOnInit(): void {
    this.getDirectors();
  }

  getDirectors(): void {
    this.isLoading = true;
    this.fetchApiData.getDirectors().subscribe((response: any) => {
      this.isLoading = false;
      this.directors = response;
      // console.log(this.directors);
      return this.directors;
    });
  }
}
