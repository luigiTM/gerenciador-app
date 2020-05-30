import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    ClienteComponent,
    ProdutoComponent,
    PedidoComponent,
    NovoClienteComponent,
    NovoProdutoComponent,
    NovoPedidoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      {
        path: 'cliente',
        component: ClienteComponent
      },
      {
        path: 'produto',
        component: ProdutoComponent
      },
      {
        path: 'pedido',
        component: PedidoComponent
      }, {
        path: 'novoCliente',
        component: NovoClienteComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
