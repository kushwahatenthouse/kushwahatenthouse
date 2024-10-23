import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedSubheaderComponent } from './expanded-subheader.component';

describe('ExpandedSubheaderComponent', () => {
  let component: ExpandedSubheaderComponent;
  let fixture: ComponentFixture<ExpandedSubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandedSubheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
