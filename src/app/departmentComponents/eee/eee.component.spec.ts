import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EEEComponent } from './eee.component';

describe('EEEComponent', () => {
  let component: EEEComponent;
  let fixture: ComponentFixture<EEEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EEEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
