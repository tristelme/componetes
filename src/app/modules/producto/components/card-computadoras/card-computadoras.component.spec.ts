import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComputadorasComponent } from './card-computadoras.component';

describe('CardComputadorasComponent', () => {
  let component: CardComputadorasComponent;
  let fixture: ComponentFixture<CardComputadorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComputadorasComponent]
    });
    fixture = TestBed.createComponent(CardComputadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
