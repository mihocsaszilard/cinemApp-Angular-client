import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genres: any[] = [];

  constructor(public fetchApiData: FetchApiDataService) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(): void {
    this.fetchApiData.getGenres().subscribe((response: any) => {
      this.genres = response;
      // console.log(this.genres);
      return this.genres;
    });
  }
}
