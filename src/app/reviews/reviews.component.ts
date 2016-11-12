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
  reviews: Array<Review>;
  selectedItem: Review;

  constructor(
    private itemsService: ReviewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reviewsService.loadItems()
      .map(reviews => this.reviews = reviews)
      .subscribe(this.diffFeaturedReviews.bind(this));
  }

  
}
