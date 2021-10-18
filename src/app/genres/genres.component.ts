import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  isLoading = false;
  genres: any[] = [];

  constructor(public fetchApiData: FetchApiDataService) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(): void {
    this.isLoading = true;
    this.fetchApiData.getGenres().subscribe((response: any) => {
      this.isLoading = false;
      this.genres = response;
      // console.log(this.genres);
      return this.genres;
    });
  }
}
