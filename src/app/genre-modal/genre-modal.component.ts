import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-genre-modal',
  templateUrl: './genre-modal.component.html',
  styleUrls: ['./genre-modal.component.scss']
})
export class GenreModalComponent implements OnInit {

  isLoading = false;

  genres: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
    }
  ) { }

  ngOnInit(): void {
    this.getGenreDescription();
  }

  getGenreDescription(): void {
    this.isLoading = true;
    this.fetchApiData.getGenres().subscribe((response: any) => {
      this.isLoading = false;
      this.genres = response;
      // console.log(this.genres);
      return this.genres;
    });
  }
}
