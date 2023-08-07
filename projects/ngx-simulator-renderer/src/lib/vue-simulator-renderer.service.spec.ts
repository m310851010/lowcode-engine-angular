import { TestBed } from '@angular/core/testing';

import { VueSimulatorRendererService } from './ngx-simulator-renderer.service';

describe('VueSimulatorRendererService', () => {
  let service: VueSimulatorRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VueSimulatorRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
