import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SignInUpComponent } from '../sign-in-up/sign-in-up.component';

@Component({
  selector: 'app-dynamique-headre',
  templateUrl: './dynamique-headre.component.html',
  styleUrls: ['./dynamique-headre.component.css']
})
export class DynamiqueHeadreComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(SignInUpComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
