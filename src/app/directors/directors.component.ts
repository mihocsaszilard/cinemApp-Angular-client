import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.scss']
})
export class DirectorsComponent implements OnInit {

  directors: any[] = [];

  constructor(public fetchApiData: FetchApiDataService) { }

  ngOnInit(): void {
    this.getDirectors();
  }

  getDirectors(): void {
    this.fetchApiData.getDirectors().subscribe((response: any) => {
      this.directors = response;
      // console.log(this.directors);
      return this.directors;
    });
  }
}
