import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTodoComponent } from './sort-todo.component';

describe('SortTodoComponent', () => {
  let component: SortTodoComponent;
  let fixture: ComponentFixture<SortTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
