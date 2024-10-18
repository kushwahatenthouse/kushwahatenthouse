import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSampleComponent } from './toggle-sample.component';

describe('ToggleSampleComponent', () => {
  let component: ToggleSampleComponent;
  let fixture: ComponentFixture<ToggleSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
