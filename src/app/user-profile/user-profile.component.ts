import { Component, OnInit, Input, NgModule } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})


export class UserProfileComponent implements OnInit {

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public router: Router,
    public snackbar: MatSnackBar,
  ) { }

  user: any = {};
  movies: any[] = [];
  favorites: any[] = [];
  showFavs: any[] = [];
  favoriteMovies: any = [];

  ngOnInit(): void {
    this.getUserData();
    this.getFavorites();
  }

  getUserData(): void {
    const currentUser = localStorage.getItem('user');
    this.fetchApiData.getUser(currentUser).subscribe((response: any) => {
      this.user = response;
      this.user.Birth = response.Birth.slice(0, 10);
      console.log(this.user);
      this.getMovies();
    });
  }

  deleteProfile(): void {
    if (confirm('Are you sure you want to delete your profile?')) {
      this.fetchApiData.deleteUser().subscribe(() => {
        localStorage.clear();
        window.location.reload();
        this.router.navigate(['welcome']);
        this.snackbar.open('Account deleted!', 'OK', {
          duration: 3000
        });
      });
    }
  }

  openEditDialog(): void {
    this.dialog.open(EditUserComponent, {
      width: '500px'
    });
  }

  getFavorites(): void {
    this.fetchApiData.getUser(localStorage.getItem('user')).subscribe((resp: any) => {
      this.favorites = resp.FavoriteMovies;
      // console.log('favs', this.favorites);
      return this.favorites;
    });
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.showFavs = resp;
      // console.log(this.showFavs);
      return this.filterMovies();
    });
  }

  filterMovies(): void {
    this.showFavs.forEach((movie: any) => {
      if (this.favorites.includes(movie._id)) {
        this.favoriteMovies.push(movie);
      }
      // console.log(this.favoriteMovies);
    });
    return this.favoriteMovies;
  }
}
