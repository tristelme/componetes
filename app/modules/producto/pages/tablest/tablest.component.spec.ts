import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablestComponent } from './tablest.component';

describe('TablestComponent', () => {
  let component: TablestComponent;
  let fixture: ComponentFixture<TablestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablestComponent]
    });
    fixture = TestBed.createComponent(TablestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
