export interface Review {
  id: number;
  name?: string;
  review?: string;
  featured?: boolean;
}

export const reviews = [
  {
    "id": 1,
    "name": "John P.",
    "review": "You should buy it!",
    "featured": true
  },
  {
    "id": 2,
    "name": "Peter A.",
    "review": "This is a best app!",
    "featured": false
  },
  {
    "id": 3,
    "name": "Mark V.",
    "Review": "This is a lovely product",
    "featured": false
  }
];
