import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SynopsisModalComponent } from '../synopsis-modal/synopsis-modal.component';
import { GenreModalComponent } from '../genre-modal/genre-modal.component';
import { DirectorModalComponent } from '../director-modal/director-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  genres: any[] = [];
  favorites: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public router: Router,
    public dialog: MatDialog,
    public snackbar: MatSnackBar,
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

  getUserFavs(): void {
    const user = localStorage.getItem('user');
    this.fetchApiData.getUser(user).subscribe((res: any) => {
      this.favorites = res.FavoriteMovies;
      return this.favorites;
    });
  }

  addToFavorites(id: string, Title: string): void {
    this.fetchApiData.addToFavorites(id).subscribe((res: any) => {
      this.snackbar.open(`${Title} has been added to favorites`, 'OK', {
        duration: 3000,
      });
      return this.getUserFavs();
    });
  }

  removeFromFavorites(id: string, Title: string): void {
    this.fetchApiData.removeFromFavorites(id).subscribe((res: any) => {
      this.snackbar.open(`${Title} has been removed from favorites`, 'OK', {
        duration: 3000,
      });
      window.location.reload();
      return this.getUserFavs();
    });
  }

  setFavoriteStatus(id: any): any {
    if (this.favorites.includes(id)) {
      return true;
    } else {
      return false;
    }
  }
}
