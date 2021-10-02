import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSEComponent } from './cse.component';

describe('CSEComponent', () => {
  let component: CSEComponent;
  let fixture: ComponentFixture<CSEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
