import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const apiUrl = 'https://cinemapp-backend.herokuapp.com/';
const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

@Injectable({
  providedIn: 'root'
})

export class FetchApiDataService {
  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  constructor(
    private http: HttpClient,
  ) { }
  // Making the api call for the user registration endpoint
  public userRegistration(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(apiUrl + 'users', userData).pipe(
      catchError(this.handleError)
    );
  }

  public userLogin(userData: any): Observable<any> {
    // console.log(userData);
    return this.http.post(apiUrl + 'login', userData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occued: ', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status},` + `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened; please try again later!'
    );
  }

  /*
   * Get all movies method
   * @returns an array of movies
   */
  getAllMovies(): Observable<any> {
    return this.http.get(apiUrl + 'movies', {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /*
  * Get a movie
  * @returns a movie
  */
  getAMovie(): Observable<any> {
    return this.http.get(apiUrl + 'movies/:movieId', {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /*
   * Get all directors method
   * @returns array of directors
   */
  getDirectors(): Observable<any> {
    return this.http.get(apiUrl + 'directors', {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /*
   * Get one director
   * @returns a director
   */
  getADirector(): Observable<any> {
    return this.http.get(apiUrl + 'directors/:name', {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /*
   * Get all genres
   * @returns an array of genres
   */
  getGenres(): Observable<any> {
    return this.http.get(apiUrl + 'genres', {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /*
   * Get one genre
   * @returns a genre
   */
  getAGenre(): Observable<any> {
    return this.http.get(apiUrl + 'genres/:name', {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /*
   * Get all actors
   * @returns array of actors
   */
  getActors(): Observable<any> {
    return this.http.get(apiUrl + 'actors', {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /*
   * Get one actor
   * @returns an actor
   */
  getAnActor(): Observable<any> {
    return this.http.get(apiUrl + 'actors/:name', {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /*
  * Get user by username
  * @param username
  * @returns Object - user data
  */
  getUser(username: any): Observable<any> {
    return this.http.get(apiUrl + `users/${username}`, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /*
   * Edit userData user by username
   * @param userData
   * @returns success/error message
   */
  editUser(userDetails: any): Observable<any> {
    return this.http.put(apiUrl + `users/${user}`, userDetails, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /*
  * Delete user
  * @param userData
  * @returns success/error message
  */
  deleteUser(): Observable<any> {
    return this.http.delete(apiUrl + `users/${user}`, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /*
  * @param username (Injected automatically, username extracted from login params)
  * @returns Array - favorite movies
  */
  getFavorites(): Observable<any> {
    return this.http.get(apiUrl + `users/${user}/movies`, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /*
   * @param id, username (Injected automatically, username extracted from login params)
   * @returns success/error message
   */
  addToFavorites(id: string): Observable<any> {
    return this.http.post(apiUrl + `users/${user}/movies/${id}`, id, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /*
   * @param id, username (Injected automatically, username extracted from login params)
   * @returns success/error message
   */
  removeFromFavorites(id: string): Observable<any> {
    return this.http.delete(apiUrl + `users/${user}/movies/${id}`, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // non-typed response extraction
  private extractResponseData(res: Response | object): any {
    const body = res;
    return body || {};
  }
}
