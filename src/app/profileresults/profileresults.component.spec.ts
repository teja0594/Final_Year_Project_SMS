import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileresultsComponent } from './profileresults.component';

describe('ProfileresultsComponent', () => {
  let component: ProfileresultsComponent;
  let fixture: ComponentFixture<ProfileresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
