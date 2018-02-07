
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { SearchItem } from './searchitem';


@Injectable()
export class SearchService {
  apiRoot: String = 'https://itunes.apple.com/search';

  constructor(private http: Http) {
  }

  search(term: string): Observable<SearchItem[]> {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=15`;
    return this.http.get(apiURL)
        .map(res => {
          return res.json().results.map(item => {
            return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId,
                item.collectionPrice,
                this.genrateRandomNumber(1, 5)
            );
          });
        });
  }

  genrateRandomNumber(start: Number, end: Number) {
    return Math.floor((Math.random() * 5) + 1);
  }
}
