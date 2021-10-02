import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicdetailsComponent } from './academicdetails.component';

describe('AcademicdetailsComponent', () => {
  let component: AcademicdetailsComponent;
  let fixture: ComponentFixture<AcademicdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
