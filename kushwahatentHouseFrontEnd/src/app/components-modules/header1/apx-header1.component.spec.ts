import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxHeader1Component } from './apx-header1.component';

describe('ApxHeader1Component', () => {
  let component: ApxHeader1Component;
  let fixture: ComponentFixture<ApxHeader1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApxHeader1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApxHeader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
