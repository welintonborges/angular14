import { Pensamento } from './../pensamento';
import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup } from "@angular/forms";
import {PensamentoService} from "../pensamento.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulario reativo'],
      autoria: [''],
      modelo: ['modelo']
    });
  }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe((pensamento) => {
      alert("Pensamento criado com sucesso!")
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    alert("Ação cancelada!")
    this.router.navigate(['/listarPensamento'])
  }



}
