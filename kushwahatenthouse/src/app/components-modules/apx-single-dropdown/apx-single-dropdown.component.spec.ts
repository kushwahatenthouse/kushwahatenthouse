import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxSingleDropdownComponent } from './apx-single-dropdown.component';

describe('ApxSingleDropdownComponent', () => {
  let component: ApxSingleDropdownComponent;
  let fixture: ComponentFixture<ApxSingleDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApxSingleDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApxSingleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
