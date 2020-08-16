import { Component, OnInit } from "@angular/core";

import { Pessoa } from "../../models/pessoa";
import { PessoaService } from "../../pessoa.service";

@Component({
  selector: "create-pessoa",
  templateUrl: "./create-pessoa.component.html",
  styleUrls: ["./create-pessoa.component.css"],
})
export class CreatePessoaComponent implements OnInit {
  pessoa: Pessoa = new Pessoa();
  submitted = false;

  constructor(private pessoaService: PessoaService) {}

  ngOnInit() {}
  adicionar() {
    this.pessoaService.createPessoa(this.pessoa).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.pessoa = new Pessoa();
  }
}
