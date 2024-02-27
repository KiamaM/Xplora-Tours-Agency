import { TestBed } from '@angular/core/testing';

import { AddTourService } from './add-tour.service';

describe('AddTourService', () => {
  let service: AddTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
