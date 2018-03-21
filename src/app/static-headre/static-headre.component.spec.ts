import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticHeadreComponent } from './static-headre.component';

describe('StaticHeadreComponent', () => {
  let component: StaticHeadreComponent;
  let fixture: ComponentFixture<StaticHeadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticHeadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticHeadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
