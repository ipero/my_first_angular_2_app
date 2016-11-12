export interface Review {
  id: number;
  img?: string;
  name?: string;
  review?: string;
  featured?: boolean;
}

export const reviews = [
  {
    "id": 1,
    "name": "John P.",
    "text": "You should buy it!",
    "featured": true
  },
  {
    "id": 2,
    "name": "Peter A.",
    "text": "This is a best app!",
    "featured": false
  },
  {
    "id": 3,
    "name": "Mark V.",
    "text": "No, it doesn't work!!!!!",
    "featured": false
  }
];
