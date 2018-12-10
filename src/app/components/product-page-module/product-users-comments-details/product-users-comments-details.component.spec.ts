import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUsersCommentsDetailsComponent } from './product-users-comments-details.component';

describe('ProductUsersCommentsDetailsComponent', () => {
  let component: ProductUsersCommentsDetailsComponent;
  let fixture: ComponentFixture<ProductUsersCommentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUsersCommentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUsersCommentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
