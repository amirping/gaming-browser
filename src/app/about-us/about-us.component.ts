import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  question_list = [{
    id: 1,
    question: 'question in breif text goes here',
    response: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quas odio aliquid debitis in !Omnis, veritatis.Modi quaerat rerum ea quo.Laudantium distinctio dignissimos, ab voluptatem eaque quibusdam inventore non minima!'
  },
  {
    id: 2,
    question: 'question in breif text goes here',
    response: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quas odio aliquid debitis in !Omnis, veritatis.Modi quaerat rerum ea quo.Laudantium distinctio dignissimos, ab voluptatem eaque quibusdam inventore non minima!'
  },
  {
    id: 3,
    question: 'question in breif text goes here',
    response: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quas odio aliquid debitis in !Omnis, veritatis.Modi quaerat rerum ea quo.Laudantium distinctio dignissimos, ab voluptatem eaque quibusdam inventore non minima!'
  }, {
    id: 4,
    question: 'question in breif text goes here',
    response: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quas odio aliquid debitis in !Omnis, veritatis.Modi quaerat rerum ea quo.Laudantium distinctio dignissimos, ab voluptatem eaque quibusdam inventore non minima!'
  }, {
    id: 5,
    question: 'question in breif text goes here',
    response: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quas odio aliquid debitis in !Omnis, veritatis.Modi quaerat rerum ea quo.Laudantium distinctio dignissimos, ab voluptatem eaque quibusdam inventore non minima!'
  }, {
    id: 6,
    question: 'question in breif text goes here',
    response: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quas odio aliquid debitis in !Omnis, veritatis.Modi quaerat rerum ea quo.Laudantium distinctio dignissimos, ab voluptatem eaque quibusdam inventore non minima!'
  }, {
    id: 7,
    question: 'question in breif text goes here',
    response: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quas odio aliquid debitis in !Omnis, veritatis.Modi quaerat rerum ea quo.Laudantium distinctio dignissimos, ab voluptatem eaque quibusdam inventore non minima!'
  }];
  constructor() { }

  ngOnInit() {
  }

}
