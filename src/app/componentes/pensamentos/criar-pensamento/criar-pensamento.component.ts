import { Pensamento } from './../pensamento';
import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {PensamentoService} from "../pensamento.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe((pensamento) => {
      alert("Pensamento criado com sucesso!")
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    alert("Ação cancelada!")
    this.router.navigate(['/listarPensamento'])
  }



}
