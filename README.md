# MTDB: Movie & TV Database
- TV Show Search App
- MongoDB, Express, Angular, Node
- TVMAZE API ([tvmaze.com/api](https://www.tvmaze.com/api))


## Homepage
![mtdb1](https://user-images.githubusercontent.com/47723396/183992434-b21917a9-1526-434d-9577-3d1469cc51c3.JPG)
### show-search.component 
- contains the page title and searchbar
### search-display.component 
- displays the information returned from the API call

## Responsive search bar
- search bar changes color when focused, and label migrates to the top of the input field
- page is styled using Angular Material, along with custom styling
![mtdb4](https://user-images.githubusercontent.com/47723396/183993064-b2e20cdd-3c86-47e4-8c8f-8b0971c2ecb9.png)

## API Interface
### itv-search-data.ts
- shows how the json data is received from the API
```ts
export interface ITvSearchData {    
    name: string,
    genres: [],
    status: string,
    schedule: {
        time: string,
        days: []
    },
    // ... (etc - code omitted for example) ...
}
```
### itvsearch.ts
- shows how we want the json data to be displayed on our webpage
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
## Results display
- search-display.component is updated using the json data returned from the API call after a valid search
```ts
export class SearchDisplayComponent implements OnInit {
 
  @Input() current: Itvsearch
  constructor() {
    this.current = {
      showName: '',
      showStatus: '',
      showGenres: [],
      // ... (etc - code omitted for example) ...
    };
  }

  ngOnInit(): void {}
}
```
![mtdb3](https://user-images.githubusercontent.com/47723396/183992949-9ba973e0-da97-43db-b331-41201d0870f6.JPG)

## Form control
- show-search.component contains the search bar functionality
- form control requires 2 or more characters before API is called, otherwise error message is displayed
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
![mtdberror](https://user-images.githubusercontent.com/47723396/184047389-19b1f0ca-7e82-4270-8235-9d43ecd68889.JPG)


