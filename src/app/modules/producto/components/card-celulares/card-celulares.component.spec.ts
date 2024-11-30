import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCelularesComponent } from './card-celulares.component';

describe('CardCelularesComponent', () => {
  let component: CardCelularesComponent;
  let fixture: ComponentFixture<CardCelularesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCelularesComponent]
    });
    fixture = TestBed.createComponent(CardCelularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
