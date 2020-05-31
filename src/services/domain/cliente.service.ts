import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ClienteDTO } from 'src/models/cliente.dto';
import { Observable } from 'rxjs';

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

  buscarTodos() : Observable<ClienteDTO[]> {
    return this.http.get<ClienteDTO[]>('api/clientes');
  }

}
