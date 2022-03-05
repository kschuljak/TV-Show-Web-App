import { Component } from '@angular/core';
import { Itvsearch } from './itvsearch';
import { TvmazeService } from './tvmaze.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tv-show-web-app';
  currentResult: Itvsearch = {
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
  }

  constructor(private tvmazeService: TvmazeService){}
  doSearch(searchValue: string){
    const userInput = searchValue;
    this.tvmazeService.getShowInfo(userInput)
    .subscribe((data: Itvsearch) => this.currentResult = data) 
  }
}
 