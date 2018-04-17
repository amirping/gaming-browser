import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchMediaMoreComponent } from '../search-media-more/search-media-more.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  web_result: Array<any> = [];
  img_result: Array<any> = [];
  video_result: Array<any> = [];
  constructor(public dialog: MatDialog) {
    // use api to fill up the results
    // test ->
    this.web_result = [
      // tslint:disable:max-line-length
      {id_search_res: 'wc554', title: 'search result title', dscrp: 'here we gonna have some dscrp like lorem ipsum shit ', link: 'https://urltoresult.com'},
      { id_search_res: 'qsd5', title: 'the sky is blue so my life', dscrp: 'some text goes here maybe 2 line for medieum screen size ', link: 'sdfsdf.com' },
      { id_search_res: 'qaz1', title: 'wow shaman best heal gear', dscrp: 'sdfsdfsd gkusdh khsdk hksdf khskdfh ksdhf kshdk fhskdhf kzgrugaz xc b jbws,dbc kqsj nqskdbfs ', link: 'sdf.fr' },
      { id_search_res: 'poi4', title: 'attack on titan back in s3', dscrp: 'sdf qsdnf jsbdqbdbf bq bfjdsb fbqkd fkqbdkf bqkdbf kqbf bq dfkqbdf bqsd f', link: 'feqq.uk' },
      { id_search_res: 'boy4d', title: 'tunisia is the greatest country ever', dscrp: 'qd fqdb fbqkfbkqb fjkbq fkqbd kfbqkdf kjqb fbqdj fbqj dbfjkqbdj', link: 'qSDSD.TN' },
    ];
    // <-
    this.img_result = [
      { id_search_res: '44r', img_url: 'https://picsum.photos/200', result_url: 'sdf_fsdf_sdf'},
      { id_search_res: '44sr', img_url: 'https://picsum.photos/200', result_url: 'sdf_fsdf_sdf' },
      { id_search_res: '44qr', img_url: 'https://picsum.photos/200', result_url: 'sdf_fsdf_sdf' },
      { id_search_res: '4q4r', img_url: 'https://picsum.photos/200', result_url: 'sdf_fsdf_sdf' },
      { id_search_res: '4z4r', img_url: 'https://picsum.photos/200', result_url: 'sdf_fsdf_sdf' },
      { id_search_res: '4w4r', img_url: 'https://picsum.photos/200', result_url: 'sdf_fsdf_sdf' },
      { id_search_res: '4x4r', img_url: 'https://picsum.photos/200', result_url: 'sdf_fsdf_sdf' },
      { id_search_res: '4c4r', img_url: 'https://picsum.photos/200', result_url: 'sdf_fsdf_sdf' },
    ];
    this.video_result = [
      {id_search_res: '564lm' }
    ];
   }

  ngOnInit() {
  }
  showMore(ev: Event, id_search: string): void {
    // show up the modal
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(SearchMediaMoreComponent, {
      panelClass: 'mat-dialog-container-no-padding',
      data: { id_search: id_search }
    });
  }

}
