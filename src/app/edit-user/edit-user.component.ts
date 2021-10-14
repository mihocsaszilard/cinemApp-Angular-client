import { Component, OnInit, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: any = {};

  @Input() userDetails = {
    Username: '',
    FirstName: '',
    LastName: '',
    Password: '',
    Email: '',
    Birth: '',
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void { }

  editUser(): void {
    this.fetchApiData.editUser(this.userDetails).subscribe((res) => {
      this.dialogRef.close();
      localStorage.setItem('user', res.Username);
      console.log(res);
      this.snackBar.open(this.userDetails.Username, 'Successfully updated user details!', {
        duration: 3000
      });
    }, (res) => {
      this.snackBar.open(res, 'OK', {
        duration: 3000
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }
}
