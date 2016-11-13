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
    private reviewsService: ReviewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reviewsService.loadReviews()
      .map(reviews => this.reviews = reviews)
      .subscribe(this.diffFeaturedReviews.bind(this));
  }

  diffFeaturedReviews(reviews: Review[]) {
    // const supposedlyFeaturedID = this.route.snapshot.firstChild.params['id'];
    //
    // if (supposedlyFeaturedID) {
    //   let supposedlyFeaturedReview = reviews.find(review => review.id === +supposedlyFeaturedID);
    //
    //   if (!supposedlyFeaturedReview.featured) {
    //     this.setReviewAsFeatured(supposedlyFeaturedReview);
    //   }
    // }
  }

  setReviewAsFeatured(review: Review) {
    // this.unsetFeaturedReview();
    //
    // this.saveReview(Object.assign({}, review, {featured: true}));
    //
    // this.router.navigate(['featured', review.id], {relativeTo: this.route});
  }



}
