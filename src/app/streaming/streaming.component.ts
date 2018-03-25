import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css']
})
export class StreamingComponent implements OnInit {
  streaming_channels: any;
  constructor() {
    this.streaming_channels = [
      { id: 1, title: "sample persone", pic_url: "https://source.unsplash.com/1600x900/?computer", view: 1544, like: 666 },
      { id: 1, title: "lored ganja", pic_url: "https://source.unsplash.com/1600x900/?person", view: 1544, like: 666 },
      { id: 1, title: "helper danny", pic_url: "https://source.unsplash.com/1600x900/?gamer", view: 1544, like: 666 },
      { id: 1, title: "ohh it's you", pic_url: "https://source.unsplash.com/1600x900/?streaming", view: 1544, like: 666 },
      { id: 1, title: "lol for kids", pic_url: "https://source.unsplash.com/1600x900/?coding", view: 1544, like: 666 },
    ]
  }
  ngOnInit() {
  }

}
