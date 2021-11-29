import { TestBed } from '@angular/core/testing';

import { ProUsersGuard } from './pro-users.guard';

describe('ProUsersGuard', () => {
  let guard: ProUsersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProUsersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
