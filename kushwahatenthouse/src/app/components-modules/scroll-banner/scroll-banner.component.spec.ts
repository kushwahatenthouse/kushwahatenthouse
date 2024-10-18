import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBannerComponent } from './scroll-banner.component';

describe('ScrollBannerComponent', () => {
  let component: ScrollBannerComponent;
  let fixture: ComponentFixture<ScrollBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
