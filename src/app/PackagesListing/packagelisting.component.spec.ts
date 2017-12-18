import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageListingComponent } from './packagelisting.component';

describe('ExclusiveTonightComponent', () => {
  let component: PackageListingComponent;
  let fixture: ComponentFixture<PackageListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
