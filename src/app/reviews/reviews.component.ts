import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Reviews } from '../shared/reviews.model'

@Component({
  selector: 'app-review',
  templateUrl: './reviews.component.html',
  // template: `
  //   <h1>{{title}}</h1>
  // `,
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit{
  constructor() { }
  title = "Great reviews"
  ngOnInit() {}
}
