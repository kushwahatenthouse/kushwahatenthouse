import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkListSampleComponent } from './link-list-sample.component';

describe('LinkListSampleComponent', () => {
  let component: LinkListSampleComponent;
  let fixture: ComponentFixture<LinkListSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkListSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkListSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
