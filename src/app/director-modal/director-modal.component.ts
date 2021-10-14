import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-director-modal',
  templateUrl: './director-modal.component.html',
  styleUrls: ['./director-modal.component.scss']
})
export class DirectorModalComponent implements OnInit {

  directors: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
    }
  ) { }

  ngOnInit(): void {
    this.getDirectorBio();
  }

  getDirectorBio(): void {
    this.fetchApiData.getDirectors().subscribe((response: any) => {
      this.directors = response;
      console.log(this.directors);
      return this.directors;
    });
  }
}
