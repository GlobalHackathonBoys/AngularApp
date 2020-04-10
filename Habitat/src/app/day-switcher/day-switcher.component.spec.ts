import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySwitcherComponent } from './day-switcher.component';

describe('DaySwitcherComponent', () => {
  let component: DaySwitcherComponent;
  let fixture: ComponentFixture<DaySwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
