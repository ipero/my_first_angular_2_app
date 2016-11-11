import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewsService, Review } from '../shared'

@Component({
  selector: 'app-review',
  templateUrl: './reviews.component.html',
  // template: `
  //   <h1>{{title}}</h1>
  // `,
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit{
  reviewItems: Review[];
  constructor(private reviewService: ReviewsService) { }
  title = "Great reviews"
  ngOnInit() {
    this.reviewItems = this.reviewService.reviews;
  }
}
