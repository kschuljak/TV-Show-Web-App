import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSearchComponent } from './show-search.component';

describe('ShowSearchComponent', () => {
  let component: ShowSearchComponent;
  let fixture: ComponentFixture<ShowSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
