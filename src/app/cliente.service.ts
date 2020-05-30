import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  inserirNovoCliente(nome, cpf, dataNascimento) {
    return this.http.post('api/clientes', {
      nome,
      cpf,
      dataNascimento
    })
  }
}
