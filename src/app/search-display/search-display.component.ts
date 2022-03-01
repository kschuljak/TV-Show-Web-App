import { Component, OnInit } from '@angular/core';
import { Itvsearch } from '../itvsearch';
import { TvmazeService } from '../tvmaze.service';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css'],
})
export class SearchDisplayComponent implements OnInit {
  
  current: Itvsearch
  constructor(private tvMazeService: TvmazeService) {
    this.current = {
      showName: '',
      showStatus: '',
      showGenres: [],
      showSummary: '',
      scheduleTime: '',
      scheduleDays: [],
      showNetwork: '' 
    }
  }

  //dummy input data 'house'
  ngOnInit(): void {
    this.tvMazeService.getShowInfo('house').
    subscribe(data => this.current = data);
  }

  
}
