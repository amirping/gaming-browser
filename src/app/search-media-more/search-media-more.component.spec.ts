import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMediaMoreComponent } from './search-media-more.component';

describe('SearchMediaMoreComponent', () => {
  let component: SearchMediaMoreComponent;
  let fixture: ComponentFixture<SearchMediaMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMediaMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMediaMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
