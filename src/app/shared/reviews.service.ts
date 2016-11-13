import { Injectable } from '@angular/core';
import { Review } from './reviews.model';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://localhost:3000/reviews/';
const IMG_URL = 'assets/img/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ReviewsService {
  constructor(private http: Http) {}

  loadReviews() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(reviews => reviews.map(review => Object.assign({}, review, {img: `${IMG_URL}${review.img}`})));
  }

  loadReview(id) {
    return this.http.get(`${BASE_URL}${id}`)
      .map(res => res.json());
  }

  saveReview(review: Review) {
    return (review.id) ? this.updateReview(review) : this.createReview(review);
  }

  createReview(review: Review) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(review), HEADER)
      .map(res => res.json());
  }

  updateReview(review: Review) {
    delete review.img;

    return this.http.patch(`${BASE_URL}${review.id}`, JSON.stringify(review), HEADER)
      .map(res => res.json())
      .map(i => Object.assign({}, i, {img: `${IMG_URL}${i.img}`}));
  }

  deleteReview(review: Review) {
    return this.http.delete(`${BASE_URL}${review.id}`)
      .map(res => res.json());
  }
}
