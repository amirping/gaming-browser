import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiqueHeadreComponent } from './dynamique-headre.component';

describe('DynamiqueHeadreComponent', () => {
  let component: DynamiqueHeadreComponent;
  let fixture: ComponentFixture<DynamiqueHeadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiqueHeadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiqueHeadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
