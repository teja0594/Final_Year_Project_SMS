import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempprofileComponent } from './tempprofile.component';

describe('TempprofileComponent', () => {
  let component: TempprofileComponent;
  let fixture: ComponentFixture<TempprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
