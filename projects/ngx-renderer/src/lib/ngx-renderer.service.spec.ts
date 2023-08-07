import { TestBed } from '@angular/core/testing';

import { NgxRendererService } from './ngx-renderer.service';

describe('NgxRendererService', () => {
  let service: NgxRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
