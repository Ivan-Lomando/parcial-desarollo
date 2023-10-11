import { Injectable } from '@angular/core';
import { Jugador } from './jugador';
import { JUGADORES } from './lista-jugadores';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  
  getJugadores(): Jugador[]{
    return JUGADORES
  }
  getJugador(id:number): Jugador | undefined{
    return JUGADORES.find(jugador => jugador.id === id);
  }
  agregarJugador(jugador: Jugador): void {
    JUGADORES.push(jugador);
  }
  eliminarJugador(id:number): void{
    const index = JUGADORES.findIndex(jugador => jugador.id === id);
    if (index !== -1){
      JUGADORES.splice(index,1);
    }
  }
  actualizarJugador(jugador: Jugador):void{
    const index = JUGADORES.findIndex(j => j.id === jugador.id);
    if (index !== -1){
      JUGADORES[index] = jugador;
    }
  }

}
