import { ComponentFixture, TestBed } from '@angular/core/testing';

import { endUserComponent } from './endUser.component';

describe('AnalyticComponent', () => {
  let component: endUserComponent;
  let fixture: ComponentFixture<endUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ endUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(endUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
