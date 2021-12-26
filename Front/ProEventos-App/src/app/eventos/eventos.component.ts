import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  public eventosFiltrados: any = [];

  exibirImagem: boolean = true;
  private _filtroLista: string = '';

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.getEventos()
  }

  getEventos() {
    this.eventosService.getEventos().subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
      error => console.log(error)
    );
  }

  expandirImagem() {
    this.exibirImagem = !this.exibirImagem;
  }

  public get filtroLista(): string {
    return this._filtroLista;
  };

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (      evento: { tema: string; local: string; }) => { 
        evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || 
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1;
      }
    )
  }

}
