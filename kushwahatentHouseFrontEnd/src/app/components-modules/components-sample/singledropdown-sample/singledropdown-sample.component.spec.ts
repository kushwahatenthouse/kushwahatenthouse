import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledropdownSampleComponent } from './singledropdown-sample.component';

describe('SingledropdownSampleComponent', () => {
  let component: SingledropdownSampleComponent;
  let fixture: ComponentFixture<SingledropdownSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingledropdownSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingledropdownSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
