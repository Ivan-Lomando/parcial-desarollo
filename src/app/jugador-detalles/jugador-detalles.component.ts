import { Component, Input } from '@angular/core';
import { Jugador } from '../jugador';
import { JugadorService } from '../jugador.service';

@Component({
  selector: 'app-jugador-detalles',
  templateUrl: './jugador-detalles.component.html',
  styleUrls: ['./jugador-detalles.component.css']
})
export class JugadorDetallesComponent {
  @Input() jugadorId?: number;
  jugador: Jugador | undefined;

  constructor(private jugadorService: JugadorService){}

  ngOnChanges(): void{
    if(this.jugadorId){
      this.jugador = this.jugadorService.getJugador(this.jugadorId);
    }
  }
}
