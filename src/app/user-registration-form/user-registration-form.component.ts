import { Component, OnInit, Input, EventEmitter, HostBinding, } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  isLoading = false;

  // defines the component’s input
  @Input() userData = {
    Username: '',
    FirstName: '',
    LastName: '',
    Password: '',
    Email: '',
    Birth: ''
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  // This is the function responsible for sending the form inputs to the backend
  registerUser(): void {
    this.isLoading = true;
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
      this.isLoading = false;
      // Logic for a successful user registration goes here! (To be implemented)
      this.dialogRef.close(); // This will close the modal on success!
      // console.log(result);
      this.snackBar.open(this.userData.Username, 'Successfully Registered! Please login!', {
        duration: 3000
      });
    }, (result) => {
      this.isLoading = false;
      // console.log(result);
      this.snackBar.open(result, 'OK', {
        duration: 3000
      });
    });
  }
}
