import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search = {
    type : '',
    word: ''
  };
  constructor(public snackBar: MatSnackBar, public router: Router) {

   }

  ngOnInit() {
  }
  doSearch() {
    if (this.search.word.length <= 3 || this.search.type.length === 0) {
      this.snackBar.open('not enogth args for search', 'ok', {
        duration: 3000,
      });
    } else {
      this.router.navigate(['search', this.search.word, this.search.type]);
    }
  }

}
