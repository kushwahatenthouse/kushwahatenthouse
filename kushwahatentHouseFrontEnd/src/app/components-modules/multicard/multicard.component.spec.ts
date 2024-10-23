import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticardComponent } from './multicard.component';

describe('MulticardComponent', () => {
  let component: MulticardComponent;
  let fixture: ComponentFixture<MulticardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulticardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
