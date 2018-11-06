import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFolderComponent } from './list-folder.component';

describe('ListFolderComponent', () => {
  let component: ListFolderComponent;
  let fixture: ComponentFixture<ListFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
