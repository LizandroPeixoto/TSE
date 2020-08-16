import { PessoaService } from "../../pessoa.service";
import { Pessoa } from "../../models/pessoa";
import { OnInit, Component } from "@angular/core";

@Component({
  selector: "search-pessoas",
  templateUrl: "./search-pessoas.component.html",
  styleUrls: ["./search-pessoas.component.css"],
})
export class SearchPessoasComponent implements OnInit {
  email: string;
  pessoas: Pessoa[];

  constructor(private dataService: PessoaService) {}

  ngOnInit() {
    this.email = "";
  }

  private searchPessoas() {
    this.dataService
      .getPessoasByEmail(this.email)
      .subscribe((pessoas) => (this.pessoas = pessoas));
  }

  onSubmit() {
    this.searchPessoas();
  }
}
