import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SynopsisModalComponent } from '../synopsis-modal/synopsis-modal.component';
import { GenreModalComponent } from '../genre-modal/genre-modal.component';
import { DirectorModalComponent } from '../director-modal/director-modal.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  genres: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((response: any) => {
      this.movies = response;
      // console.log(this.movies);
      return this.movies;
    });
  }

  openSynopsisModal(title: string, description: string): void {
    this.dialog.open(SynopsisModalComponent, {
      panelClass: 'custom-dialog-container',
      width: '70%',
      height: '70%',
      data: {
        Name: title,
        Description: description,
      }
    });
  }

  openGenreModal(name: string): void {
    this.dialog.open(GenreModalComponent, {
      panelClass: 'custom-dialog-container',
      width: '70%',
      height: '70%',
      data: {
        Name: name,
      }
    });
  }

  openDirectorModal(name: string): void {
    this.dialog.open(DirectorModalComponent, {
      panelClass: 'custom-dialog-container',
      width: '70%',
      height: '70%',
      data: {
        Name: name,
      }
    });
  }
}
