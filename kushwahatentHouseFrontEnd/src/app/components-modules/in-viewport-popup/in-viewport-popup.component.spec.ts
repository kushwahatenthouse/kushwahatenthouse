import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InViewportPopupComponent } from './in-viewport-popup.component';

describe('InViewportPopupComponent', () => {
  let component: InViewportPopupComponent;
  let fixture: ComponentFixture<InViewportPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InViewportPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InViewportPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
