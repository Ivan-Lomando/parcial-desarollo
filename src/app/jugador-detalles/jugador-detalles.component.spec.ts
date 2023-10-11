import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorDetallesComponent } from './jugador-detalles.component';

describe('JugadorDetallesComponent', () => {
  let component: JugadorDetallesComponent;
  let fixture: ComponentFixture<JugadorDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugadorDetallesComponent]
    });
    fixture = TestBed.createComponent(JugadorDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
