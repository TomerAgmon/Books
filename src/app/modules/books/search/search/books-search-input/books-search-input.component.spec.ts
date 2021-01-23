import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSearchInputComponent } from './books-search-input.component';

describe('BooksSearchInputComponent', () => {
  let component: BooksSearchInputComponent;
  let fixture: ComponentFixture<BooksSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
