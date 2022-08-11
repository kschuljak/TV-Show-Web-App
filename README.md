# MTDB: Movie & TV Database
- TV Show Search App
- MongoDB, Express, Angular, Node
- Utilizes TVMAZE API to search for show information ([tvmaze.com/api](https://www.tvmaze.com/api))
- Styled using Angular Material

## Examples

## Homepage
- composed of two main components: show-search.component & search-display.component
![mtdb1](https://user-images.githubusercontent.com/47723396/183992434-b21917a9-1526-434d-9577-3d1469cc51c3.JPG)

- Responsive search bar
![mtdb4](https://user-images.githubusercontent.com/47723396/183993064-b2e20cdd-3c86-47e4-8c8f-8b0971c2ecb9.png)

- Results display
![mtdb3](https://user-images.githubusercontent.com/47723396/183992949-9ba973e0-da97-43db-b331-41201d0870f6.JPG)

## Form Control
- Form control requires 2 or more characters before API is called, otherwise error message is displayed
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
![mtdb2](https://user-images.githubusercontent.com/47723396/183993658-3a214603-6a45-4464-88ce-637d6a75850f.JPG)

