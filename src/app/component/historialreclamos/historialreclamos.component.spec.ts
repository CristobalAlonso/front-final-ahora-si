import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialreclamosComponent } from './historialreclamos.component';

describe('HistorialreclamosComponent', () => {
  let component: HistorialreclamosComponent;
  let fixture: ComponentFixture<HistorialreclamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialreclamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialreclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
