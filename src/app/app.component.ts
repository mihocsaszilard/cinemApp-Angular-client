import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'cinemApp-Angular-client';
  private isDark = true;

  @HostBinding('class')
  get themeMode(): string {
    return this.isDark ? 'dark-theme' : 'light-theme';
  }
}
