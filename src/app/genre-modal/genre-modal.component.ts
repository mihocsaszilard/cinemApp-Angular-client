import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genre-modal',
  templateUrl: './genre-modal.component.html',
  styleUrls: ['./genre-modal.component.scss']
})
export class GenreModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
      Description: string;
    }
  ) { }

  ngOnInit(): void {
  }
}
