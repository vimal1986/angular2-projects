import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveTonightComponent } from './exclusive-tonight.component';

describe('ExclusiveTonightComponent', () => {
  let component: ExclusiveTonightComponent;
  let fixture: ComponentFixture<ExclusiveTonightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusiveTonightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusiveTonightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
