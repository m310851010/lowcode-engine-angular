import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRendererComponent } from './ngx-renderer.component';

describe('NgxRendererComponent', () => {
  let component: NgxRendererComponent;
  let fixture: ComponentFixture<NgxRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
