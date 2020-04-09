import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesterdaysHandoverComponent } from './yesterdays-handover.component';

describe('YesterdaysHandoverComponent', () => {
  let component: YesterdaysHandoverComponent;
  let fixture: ComponentFixture<YesterdaysHandoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesterdaysHandoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesterdaysHandoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
