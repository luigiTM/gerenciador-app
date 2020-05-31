import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/services/domain/cliente.service';
import { ClienteDTO } from 'src/models/cliente.dto';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes : ClienteDTO[];

  constructor(
    public clienteService: ClienteService
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.clienteService.buscarTodos().subscribe(response => {
      this.clientes = response
    },
      error => {
        console.log(error)
      })
  }

}
