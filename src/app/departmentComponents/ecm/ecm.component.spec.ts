import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECMComponent } from './ecm.component';

describe('ECMComponent', () => {
  let component: ECMComponent;
  let fixture: ComponentFixture<ECMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
