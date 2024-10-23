import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxMultiDropdownComponent } from './apx-multi-dropdown.component';

describe('ApxMultiDropdownComponent', () => {
  let component: ApxMultiDropdownComponent;
  let fixture: ComponentFixture<ApxMultiDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApxMultiDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApxMultiDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
