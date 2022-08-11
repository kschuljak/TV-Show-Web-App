# MTDB: Movie & TV Database
- TV Show Search App
- MongoDB, Express, Angular, Node
- TVMAZE API ([tvmaze.com/api](https://www.tvmaze.com/api))


## Homepage

### show-search.component 
- contains the website title and searchbar functionality
![mtdb1](https://user-images.githubusercontent.com/47723396/183992434-b21917a9-1526-434d-9577-3d1469cc51c3.JPG)
#### Responsive search bar
- search bar changes color when focused, and label migrates to the top of the input field
- page is styled using Angular Material, along with custom styling
![mtdb4](https://user-images.githubusercontent.com/47723396/183993064-b2e20cdd-3c86-47e4-8c8f-8b0971c2ecb9.png)
#### Form control
- form control requires 2 or more characters before API is called, otherwise error message is displayed
![mtdberror](https://user-images.githubusercontent.com/47723396/184047389-19b1f0ca-7e82-4270-8235-9d43ecd68889.JPG)

### search-display.component 
- displays the information returned from the API call
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




