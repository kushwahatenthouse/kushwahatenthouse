import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsCollectionComponent } from './pills-collection.component';

describe('PillsCollectionComponent', () => {
  let component: PillsCollectionComponent;
  let fixture: ComponentFixture<PillsCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillsCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
