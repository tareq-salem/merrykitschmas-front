import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUsersCommentsComponent } from './product-users-comments.component';

describe('ProductUsersCommentsComponent', () => {
  let component: ProductUsersCommentsComponent;
  let fixture: ComponentFixture<ProductUsersCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUsersCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUsersCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
