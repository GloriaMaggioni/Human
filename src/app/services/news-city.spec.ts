import { TestBed } from '@angular/core/testing';

import { NewsCity } from './news-city';

describe('NewsCity', () => {
  let service: NewsCity;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsCity);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
