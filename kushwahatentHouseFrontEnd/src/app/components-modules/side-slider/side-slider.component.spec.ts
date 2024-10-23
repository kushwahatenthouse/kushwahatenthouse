import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSliderComponent } from './side-slider.component';

describe('SideSliderComponent', () => {
  let component: SideSliderComponent;
  let fixture: ComponentFixture<SideSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
