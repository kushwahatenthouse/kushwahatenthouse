import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxHeader2Component } from './apx-header2.component';

describe('ApxHeader2Component', () => {
  let component: ApxHeader2Component;
  let fixture: ComponentFixture<ApxHeader2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApxHeader2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApxHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
