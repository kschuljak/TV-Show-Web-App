
import { Component, Input, OnInit } from '@angular/core';
import { Itvsearch } from '../itvsearch';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css'],
})
export class SearchDisplayComponent implements OnInit {
 
  @Input() current: Itvsearch
  constructor() {
    this.current = {
      showName: '',
      showStatus: '',
      showGenres: [],
      showSummary: '',
      scheduleTime: '',
      scheduleDays: [],
      showNetwork: '',
      showImage: '',
      showLanguage: '',
      showRuntime: 0,
      showRating: 0,
    };
  }

  ngOnInit(): void {}
}
