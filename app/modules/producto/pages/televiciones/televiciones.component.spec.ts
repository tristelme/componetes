import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevicionesComponent } from './televiciones.component';

describe('TelevicionesComponent', () => {
  let component: TelevicionesComponent;
  let fixture: ComponentFixture<TelevicionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelevicionesComponent]
    });
    fixture = TestBed.createComponent(TelevicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
