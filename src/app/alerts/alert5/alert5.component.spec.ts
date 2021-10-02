import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alert5Component } from './alert5.component';

describe('Alert5Component', () => {
  let component: Alert5Component;
  let fixture: ComponentFixture<Alert5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alert5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alert5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
