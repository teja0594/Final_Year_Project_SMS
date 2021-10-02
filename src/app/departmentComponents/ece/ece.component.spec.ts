import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECEComponent } from './ece.component';

describe('ECEComponent', () => {
  let component: ECEComponent;
  let fixture: ComponentFixture<ECEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
