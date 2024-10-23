import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividedSectionCardComponent } from './divided-section-card.component';

describe('DividedSectionCardComponent', () => {
  let component: DividedSectionCardComponent;
  let fixture: ComponentFixture<DividedSectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividedSectionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividedSectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
