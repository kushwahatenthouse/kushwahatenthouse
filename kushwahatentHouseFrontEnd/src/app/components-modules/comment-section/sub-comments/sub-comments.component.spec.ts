import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCommentsComponent } from './sub-comments.component';

describe('SubCommentsComponent', () => {
  let component: SubCommentsComponent;
  let fixture: ComponentFixture<SubCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
