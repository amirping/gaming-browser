import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-search-media-more',
  templateUrl: './search-media-more.component.html',
  styleUrls: ['./search-media-more.component.css']
})
export class SearchMediaMoreComponent implements OnInit {
  result_item =
  // tslint:disable-next-line:max-line-length
  { id_search_res: '44r', title: 'mais result title here', dscrp: 'we can have some text here to breif description of the result we have , maybe with some search key', img_url: 'https://picsum.photos/600/400', result_url: 'http://www.somewebiste.com', size: '600x400' };
  similair_result: Array<any> = [
    { id_search_res: '44r', img_url: 'https://picsum.photos/100', result_url: 'sdf_fsdf_sdf' },
    { id_search_res: '44rs', img_url: 'https://picsum.photos/100', result_url: 'sdf_fsdf_sdf' },
    { id_search_res: '44qr', img_url: 'https://picsum.photos/100', result_url: 'sdf_fsdf_sdf' },
    { id_search_res: '44ar', img_url: 'https://picsum.photos/100', result_url: 'sdf_fsdf_sdf' },
    { id_search_res: '44rd', img_url: 'https://picsum.photos/100', result_url: 'sdf_fsdf_sdf' },
    { id_search_res: '44rw', img_url: 'https://picsum.photos/100', result_url: 'sdf_fsdf_sdf' }
  ];
  constructor(public dialogRef: MatDialogRef<SearchMediaMoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      // fill up the results
    }

  ngOnInit() {
  }

}
