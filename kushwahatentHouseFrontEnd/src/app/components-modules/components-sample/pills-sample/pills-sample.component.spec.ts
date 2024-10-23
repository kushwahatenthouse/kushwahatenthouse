import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsSampleComponent } from './pills-sample.component';

describe('PillsSampleComponent', () => {
  let component: PillsSampleComponent;
  let fixture: ComponentFixture<PillsSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillsSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
