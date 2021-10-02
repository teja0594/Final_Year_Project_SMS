import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAttendanceRegistarComponent } from './admin-attendance-registar.component';

describe('AdminAttendanceRegistarComponent', () => {
  let component: AdminAttendanceRegistarComponent;
  let fixture: ComponentFixture<AdminAttendanceRegistarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAttendanceRegistarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAttendanceRegistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
