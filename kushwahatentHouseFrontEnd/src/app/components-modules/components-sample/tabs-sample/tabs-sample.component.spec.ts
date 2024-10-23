import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSampleComponent } from './tabs-sample.component';

describe('TabsSampleComponent', () => {
  let component: TabsSampleComponent;
  let fixture: ComponentFixture<TabsSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
