import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarReclamosComponent } from './agregar-reclamos.component';

describe('AgregarReclamosComponent', () => {
  let component: AgregarReclamosComponent;
  let fixture: ComponentFixture<AgregarReclamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarReclamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
