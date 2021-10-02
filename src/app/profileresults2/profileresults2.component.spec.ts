import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Profileresults2Component } from './profileresults2.component';

describe('Profileresults2Component', () => {
  let component: Profileresults2Component;
  let fixture: ComponentFixture<Profileresults2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profileresults2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profileresults2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
