import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeGridComponent } from './welcome-grid.component';

describe('WelcomeGridComponent', () => {
  let component: WelcomeGridComponent;
  let fixture: ComponentFixture<WelcomeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
