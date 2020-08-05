import { TestBed } from '@angular/core/testing';

import { RubricService } from './rubric.service';

describe('RubricService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RubricService = TestBed.get(RubricService);
    expect(service).toBeTruthy();
  });
});
