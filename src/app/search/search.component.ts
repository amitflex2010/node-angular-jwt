import { Component, OnInit  } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';

import { SearchService } from './search.service';
import { SearchItem } from './searchitem';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
  })

  export class SearchComponent implements OnInit {
    private loading: Boolean = false;
    private results: Observable<SearchItem[]>;
    private searchField: FormControl;
    private ncount: Number;

    constructor(private itunes: SearchService) {
    }

    ngOnInit() {

      this.searchField = new FormControl();
      this.results = this.searchField.valueChanges
          .debounceTime(400)
          .distinctUntilChanged()
          .do(_ => this.loading = true)
          .switchMap(term => this.itunes.search(term))
          .do(_ => this.loading = false);
          //.do(_ => this.ncount = this.results.rating);
    }

    doSearch(term: string) {
      this.itunes.search(term);
    }
  }
