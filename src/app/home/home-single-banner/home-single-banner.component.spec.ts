import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSingleBannerComponent } from './home-single-banner.component';

describe('HomeSingleBannerComponent', () => {
  let component: HomeSingleBannerComponent;
  let fixture: ComponentFixture<HomeSingleBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSingleBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSingleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
