import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardMembersComponent } from './onboard-members.component';

describe('OnboardMembersComponent', () => {
  let component: OnboardMembersComponent;
  let fixture: ComponentFixture<OnboardMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
