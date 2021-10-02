import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CIVILComponent } from './civil.component';

describe('CIVILComponent', () => {
  let component: CIVILComponent;
  let fixture: ComponentFixture<CIVILComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CIVILComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CIVILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
