import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-starrating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
 })
export class StarRatingComponent implements OnInit {
  @Input() rating: Number = 0;
  @Output() clickedItem: EventEmitter<Number> = new EventEmitter<Number>();

  private maxRating: Number = 5;

  ratingRange: Number[];

  constructor() { }

  ngOnInit() {
    this.buildRanges();
  }

  private buildRanges() {
    this.ratingRange = this.range(1, this.maxRating);
}

  private range(start: Number, end: Number) {
    const foo: Number[] = [];
    for (let i = 1; i <= end; i++) {
        foo.push(i);
    }
    return foo;
}

setSelectedRating (ratingvalue) {
    if (ratingvalue < this.rating) {
        return 'selectedItem';
    }
}

starClick(item, e, index) {
    this.rating = item;
    this.clickedItem.emit(this.rating);
}

}
