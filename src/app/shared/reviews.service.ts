import { Injectable } from '@angular/core';
import { Review, reviews } from './reviews.model';

@Injectable()
export class ReviewsService {
  reviews: Review[] = reviews;

  constructor() {}

}
