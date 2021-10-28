import { TestBed } from '@angular/core/testing';

import { FirebaseVideoService } from './firebase-video.service';

describe('FirebaseVideoService', () => {
  let service: FirebaseVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
