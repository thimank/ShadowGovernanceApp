import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticLoginComponent } from './analyticLogin.component';

describe('AnalyticLoginComponent', () => {
  let component: AnalyticLoginComponent;
  let fixture: ComponentFixture<AnalyticLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
