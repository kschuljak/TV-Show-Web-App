import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tv-show-web-app';
}
 
 /* commenting out for testing purposes 
  queryText = '';
  showResults = [];
  searchAPI(event: Event) {
    // event.preventDefault();

    fetch(`https://api.tvmaze.com/search/shows?q=${this.queryText}`)
      .then((response) => response.json())
      .then((data: any) => {
        console.log(data);
        if (data.length) {
        this.showResults = data;}
      });
  }
}
*/