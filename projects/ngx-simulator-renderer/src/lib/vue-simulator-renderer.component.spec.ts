import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueSimulatorRendererComponent } from './ngx-simulator-renderer.component';

describe('VueSimulatorRendererComponent', () => {
  let component: VueSimulatorRendererComponent;
  let fixture: ComponentFixture<VueSimulatorRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueSimulatorRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueSimulatorRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
