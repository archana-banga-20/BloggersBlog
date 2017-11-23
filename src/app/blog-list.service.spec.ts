import { TestBed, inject } from '@angular/core/testing';

import { BlogListService } from './blog-list.service';

describe('BlogListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogListService]
    });
  });

  it('should be created', inject([BlogListService], (service: BlogListService) => {
    expect(service).toBeTruthy();
  }));
});
