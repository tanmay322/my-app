import { TestBed } from '@angular/core/testing';

import { GetFoodService } from './get-food.service';

describe('GetFoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFoodService = TestBed.get(GetFoodService);
    expect(service).toBeTruthy();
  });
});
