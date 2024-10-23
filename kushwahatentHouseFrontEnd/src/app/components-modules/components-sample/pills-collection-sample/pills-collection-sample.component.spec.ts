import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsCollectionSampleComponent } from './pills-collection-sample.component';

describe('PillsCollectionSampleComponent', () => {
  let component: PillsCollectionSampleComponent;
  let fixture: ComponentFixture<PillsCollectionSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillsCollectionSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsCollectionSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
