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
      this.getMovies();
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

