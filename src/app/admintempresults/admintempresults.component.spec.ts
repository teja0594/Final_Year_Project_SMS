import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintempresultsComponent } from './admintempresults.component';

describe('AdmintempresultsComponent', () => {
  let component: AdmintempresultsComponent;
  let fixture: ComponentFixture<AdmintempresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintempresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintempresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
