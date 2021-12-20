using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        private string value = "Exemplo de";

        public IEnumerable<Evento> _evento = new Evento[]
            {
                new Evento() {
                    EventoId = 1,
                    Local = "Centerplax, Caruaru",
                    DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"),
                    Tema = "Filme:  Homem-Aranha: Sem Volta para Casa",
                    QtdPessoas = 13,
                    Lote = null,
                    imagemUrl = null
                },
                new Evento() {
                    EventoId = 2,
                    Local = "Centerplax, Caruaru",
                    DataEvento = "28/12/21 14:00:00",
                    Tema = "Filme: Matrix Resurrections",
                    QtdPessoas = 3,
                    Lote = null,
                    imagemUrl = null
                }
            };

        public EventoController()
        {
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _evento;
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> Get(int id)
        {
            return _evento.Where(evento=>evento.EventoId == id);
        }

        [HttpPost]
        public string Post()
        {
            return $"{value} Post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"{value} Put com id = {id}";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"{value} Delete com id = {id}";
        }
    }
}
