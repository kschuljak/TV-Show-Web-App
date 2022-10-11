# MTDB: Movie & TV Database
- TV Show Search App
- MongoDB, Express, Angular, Node
- TVmaze REST API ([tvmaze.com/api](https://www.tvmaze.com/api))
- Video of website presentation at https://youtu.be/qjAyX35LYO4


## Homepage

### show-search.component 
- contains the website title and searchbar functionality
![mtdb1](https://user-images.githubusercontent.com/47723396/183992434-b21917a9-1526-434d-9577-3d1469cc51c3.JPG)
#### Responsive search bar
- search bar changes color when focused, and label migrates to the top of the input field
- page is styled using Angular Material, along with custom styling
![mtdb4](https://user-images.githubusercontent.com/47723396/183993064-b2e20cdd-3c86-47e4-8c8f-8b0971c2ecb9.png)
#### Form control
- two or more characters must be entered before API is called, otherwise error message is displayed
![mtdberror](https://user-images.githubusercontent.com/47723396/184047389-19b1f0ca-7e82-4270-8235-9d43ecd68889.JPG)

### search-display.component 
- displays the information returned from the API call
- updates after a valid search is performed
![mtdb3](https://user-images.githubusercontent.com/47723396/183992949-9ba973e0-da97-43db-b331-41201d0870f6.JPG)


## API Interface
- API is called after a one second delay, set by debounceTime
```ts
export class ShowSearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('', [Validators.minLength(2)]);
 
  constructor() {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue: string) => {
      if (!this.search.invalid) {
          this.searchEvent.emit(searchValue)
      }
    });
  }
}
```
![jsonapitvmaze (2)](https://user-images.githubusercontent.com/47723396/184259992-c0327cb9-9a53-4c91-b77a-38163c0c8644.JPG) 
- JSON data is returned from API call



### itv-search-data.ts
- interface for how the json data is received from TVMAZE API
```ts
export interface ITvSearchData {    
    name: string,
    genres: [],
    status: string,
    schedule: {
        time: string,
        days: []
    }
    // ... (etc - code omitted for example) ...
}
```
### itvsearch.ts
- interface for how we want the json data to be displayed on our webpage
```ts
export interface Itvsearch {
   showName: string
   showStatus: string
   showGenres: Array<string>
   scheduleTime: string
   scheduleDays: Array<string>
   // ... (etc - code omitted for example) ...
}
```
### tvmaze.service.ts
- connects the two interfaces
```ts
getShowInfo(showName: string){
   return this.httpClient.get<ITvSearchData>
   (`https://api.tvmaze.com/singlesearch/shows?q=${showName}`)
   .pipe(map(data => this.transformToItvsearch(data) ))
}
private transformToItvsearch(data: ITvSearchData){
   return {
      showName: data.name,
      showStatus: data.status,
      showGenres: data.genres.map(x => " " + x),
      scheduleTime: data.schedule.time,
      scheduleDays: data.schedule.days.map(x => " " + x)
      // ... (etc - code omitted for example) ...
   }
}
```
### app.component.ts
- holds the current result of the API call
```ts
import { Itvsearch } from './itvsearch';
import { TvmazeService } from './tvmaze.service';
// ... (code omitted for example) ...
   currentResult: Itvsearch = {
      showName: '',
      showStatus: '',
      showGenres: [],
      scheduleTime: '',
      scheduleDays: []
      // ... (etc - code omitted for example)
   }
   constructor(private tvmazeService: TvmazeService){}
   doSearch(searchValue: string){
      const userInput = searchValue;
      this.tvmazeService.getShowInfo(userInput)
      .subscribe((data: Itvsearch) => this.currentResult = data) 
   } // ... (code omitted for example) ...
```



