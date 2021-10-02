import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintostudentComponent } from './admintostudent.component';

describe('AdmintostudentComponent', () => {
  let component: AdmintostudentComponent;
  let fixture: ComponentFixture<AdmintostudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintostudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
