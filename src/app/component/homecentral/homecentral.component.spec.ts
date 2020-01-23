import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecentralComponent } from './homecentral.component';

describe('HomecentralComponent', () => {
  let component: HomecentralComponent;
  let fixture: ComponentFixture<HomecentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
