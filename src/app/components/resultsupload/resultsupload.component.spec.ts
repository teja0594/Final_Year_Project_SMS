import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsuploadComponent } from './resultsupload.component';

describe('ResultsuploadComponent', () => {
  let component: ResultsuploadComponent;
  let fixture: ComponentFixture<ResultsuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
