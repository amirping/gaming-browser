import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shop_list: Array<any> = [];
  index_item = 0;
  constructor() {
    this.shop_list = [
      { id: 'sdn', title: 'some card title', img: 'https://picsum.photos/400/200', stat: false, url: 'shop url', price: 250 },
      { id: 'sdnq', title: 'CS GO kit Bundle', img: 'https://picsum.photos/400/200', stat: false, url: 'shop url', price: 250 },
      { id: 'sdna', title: 'smite gems everywhere', img: 'https://picsum.photos/400/200', stat: false, url: 'shop url', price: 250 }
    ];
    this.index_item = Math.floor((this.shop_list.length - 1) / 2);
    this.shop_list[this.index_item].stat = true;
  }
  ngOnInit() {
  }
  nextCard() {
    this.shop_list[this.index_item].stat = false;
    // if last
    if (this.index_item === this.shop_list.length - 1) {
      this.shop_list[0].stat = true;
      this.index_item = 0;
    } else {
      this.shop_list[this.index_item + 1].stat = true;
      this.index_item += 1;
    }
  }
  perviousCard() {
    this.shop_list[this.index_item].stat = false;
    // if first
    if (this.index_item === 0) {
      this.shop_list[this.shop_list.length - 1].stat = true;
      this.index_item = this.shop_list.length - 1;
    } else {
      this.shop_list[this.index_item - 1].stat = true;
      this.index_item -= 1;
    }
  }
  selectToShow (index) {
    this.shop_list[this.index_item].stat = false;
    this.index_item = index;
    this.shop_list[this.index_item].stat = true;
  }

}
