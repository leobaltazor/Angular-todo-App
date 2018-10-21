import { TestBed } from '@angular/core/testing';

import { ServiceTodoService } from './service-todo.service';

describe('ServiceTodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceTodoService = TestBed.get(ServiceTodoService);
    expect(service).toBeTruthy();
  });
});
