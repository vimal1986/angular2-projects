import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePartyComponent } from './private-party.component';

describe('PrivatePartyComponent', () => {
  let component: PrivatePartyComponent;
  let fixture: ComponentFixture<PrivatePartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatePartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatePartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
