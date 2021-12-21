import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any;

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.getEventos()
  }

  getEventos() {
    this.eventosService.getEventos().subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );
  }
}
