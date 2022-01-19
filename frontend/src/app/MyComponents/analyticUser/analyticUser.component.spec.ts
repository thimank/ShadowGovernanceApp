import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticUserComponent } from './analyticUser.component';

describe('AnalyticUserComponent', () => {
  let component: AnalyticUserComponent;
  let fixture: ComponentFixture<AnalyticUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
