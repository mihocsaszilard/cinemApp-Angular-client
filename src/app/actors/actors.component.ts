import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  actors: any[] = [];

  constructor(public fetchApiData: FetchApiDataService) { }

  ngOnInit(): void {
    this.getActors();
  }

  getActors(): void {
    this.fetchApiData.getActors().subscribe((response: any) => {
      this.actors = response;
      console.log(this.actors);
      return this.actors;
    });
  }
}
