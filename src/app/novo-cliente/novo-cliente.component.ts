import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/domain/cliente.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  constructor(private clienteServico: ClienteService) { }

  ngOnInit(): void {
  }

  incluirNovoCliente(event) {
    event.preventDefault()
    const alvo = event.target
    const nome = alvo.querySelector('#nome').value
    const cpf = alvo.querySelector('#cpf').value
    const dataNascimento = new Date(alvo.querySelector('#dataNascimento').value)
    const dataNascimentoFormatada = dataNascimento.getFullYear() + "-" + dataNascimento.getMonth() + "-" + dataNascimento.getDay()
    this.clienteServico.inserirNovoCliente(nome, cpf, dataNascimento).subscribe(
      response => {
        window.alert("Cliente inserido com sucesso!")
      }, error => {
        console.log(error)
      }
    )
  }
}
