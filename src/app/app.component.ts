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
    const userInput = .map(s => s.trim())
    this.tvmazeService
    .getShowInfo(userInput)
    .subscribe((data) => (this.current = data)) 
  }


}
 
 /* commenting out for testing purposes 
  queryText = '';
  showResults = [];
  searchAPI(event: Event) {
    // event.preventDefault();

    fetch(`https://api.tvmaze.com/search/shows?q=${this.querysText}`)
      .then((response) => response.json())
      .then((data: any) => {
        console.log(data);
        if (data.length) {
        this.showResults = data;}
      });
  }
}
*/