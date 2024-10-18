import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseMcqComponent } from './practise-mcq.component';

describe('PractiseMcqComponent', () => {
  let component: PractiseMcqComponent;
  let fixture: ComponentFixture<PractiseMcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractiseMcqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractiseMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
