import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alert4Component } from './alert4.component';

describe('Alert4Component', () => {
  let component: Alert4Component;
  let fixture: ComponentFixture<Alert4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alert4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alert4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
