import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  toProfile(): void {
    this.router.navigate(['/profile'])
      .then(success => console.log('navigation success?', success))
      .catch(console.error);
  }

  toActors(): void {
    this.router.navigate(['/actors'])
      .then(success => console.log('navigation success?', success))
      .catch(console.error);
  }

  toDirectors(): void {
    this.router.navigate(['/directors'])
      .then(success => console.log('navigation success?', success))
      .catch(console.error);
  }

  toGenres(): void {
    this.router.navigate(['/genres'])
      .then(success => console.log('navigation success?', success))
      .catch(console.error);
  }

  backToHome(): void {
    this.router.navigate(['/movies'])
      .then(success => console.log('navigation success?', success))
      .catch(console.error);
  }

  logOut(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/welcome'])
      .then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
}
