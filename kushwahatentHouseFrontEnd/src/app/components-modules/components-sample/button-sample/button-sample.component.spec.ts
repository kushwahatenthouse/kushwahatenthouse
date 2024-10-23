import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSampleComponent } from './button-sample.component';

describe('ButtonSampleComponent', () => {
  let component: ButtonSampleComponent;
  let fixture: ComponentFixture<ButtonSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
