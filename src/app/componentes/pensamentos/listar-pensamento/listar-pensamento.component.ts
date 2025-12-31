import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import {PensamentoService} from "../pensamento.service";
import {PensamentoComponent} from "../pensamento/pensamento.component";

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listapensamentos: Pensamento[] = [];

  constructor( private service: PensamentoService) { }

  ngOnInit(): void {
    debugger
    this.service.listar().subscribe((listapensamentos) => {
      this.listapensamentos = listapensamentos
      console.log(this.listapensamentos)
    });
  }
}

