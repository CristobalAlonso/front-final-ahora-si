import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalEjecutivoComponent } from './portal-ejecutivo.component';

describe('PortalEjecutivoComponent', () => {
  let component: PortalEjecutivoComponent;
  let fixture: ComponentFixture<PortalEjecutivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalEjecutivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalEjecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
