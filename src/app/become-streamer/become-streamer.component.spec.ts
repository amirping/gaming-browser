import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeStreamerComponent } from './become-streamer.component';

describe('BecomeStreamerComponent', () => {
  let component: BecomeStreamerComponent;
  let fixture: ComponentFixture<BecomeStreamerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeStreamerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeStreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
