import { Component, OnInit } from '@angular/core';
import { Jugador } from '../jugador';
import { JUGADORES } from '../lista-jugadores';
import { JugadorService } from '../jugador.service';
@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit{
  jugadores: Jugador[] = [];
  jugadorSeleccionado: Jugador | null = null;

  constructor( private  jugadorService: JugadorService){}

  ngOnInit(): void {
      this.getJugador();
  }
  getJugador(): void{
    this.jugadores = this.jugadorService.getJugadores();
  }
  mostrarDetalles(jugador: Jugador): void{
    this.jugadorSeleccionado = jugador;
  }
  eliminarJugador(jugador: Jugador):void{
    this.jugadorService.eliminarJugador(jugador.id);
    this.getJugador();
  }
  agregarJugador(): void{
    const nuevoJugador: Jugador = {
      id: this.jugadores.length + 1,
      nombre: "valverde",
      posicion: "MC",
      imagen: "assets/imagenes/VALVERDE.jpeg"
    };
    this.jugadorService.agregarJugador(nuevoJugador);
    this.getJugador();
  }
}
