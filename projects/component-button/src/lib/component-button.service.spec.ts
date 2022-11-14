import { TestBed } from '@angular/core/testing';

import { ComponentButtonService } from './component-button.service';

describe('ComponentButtonService', () => {
  let service: ComponentButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
