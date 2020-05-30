import { Component, OnInit } from '@angular/core';
import{ ClienteService } from '../cliente.service'

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  constructor(private clienteServico: ClienteService) { }

  ngOnInit(): void {
  }

  incluirNovoCliente(event){
    event.preventDefault()
    const alvo = event.target
    const nome = alvo.querySelector('#nome').value
    const cpf = alvo.querySelector('#cpf').value
    const dataNascimento = alvo.querySelector('#dataNascimento').value
    this.clienteServico.inserirNovoCliente(nome,cpf,dataNascimento).subscribe(
      data =>{
        //console.log(data)
        if(data == null){
          //voltar para a tela de clientes
          window.alert("Cliente inserido com sucesso!")
        }else{
          window.alert("Dados inválidos!")
        }
      }
    )
    console.log(nome,cpf)
  }

}
