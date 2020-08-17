import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { PessoaService } from "../../pessoa.service";
import { Pessoa } from "../../models/pessoa";

@Component({
  selector: "pessoas-list",
  templateUrl: "./pessoas-list.component.html",
  styleUrls: ["./pessoas-list.component.css"],
})
export class PessoasListComponent implements OnInit {
  pessoas: Observable<Pessoa[]>;

  constructor(private pessoaService: PessoaService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.pessoas = this.pessoaService.getListaPessoas();
  }
}
