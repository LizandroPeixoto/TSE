import { PessoaService } from "./../../pessoa.service";
import { Pessoa } from "./../../models/pessoa";
import { OnInit, Input, Component } from "@angular/core";
import { PessoasListComponent } from "../pessoas-list/pessoas-list.component";

@Component({
  selector: "pessoa-details",
  templateUrl: "./pessoa-details.component.html",
  styleUrls: ["./pessoa-details.component.css"],
})
export class PessoaDetailsComponent implements OnInit {
  @Input() pessoa: Pessoa;

  constructor(
    private pessoaService: PessoaService,
    private listComponent: PessoasListComponent
  ) {}

  ngOnInit() {}

  updateActive(isActive: boolean) {
    this.pessoaService
      .updatePessoa(this.pessoa.id, {
        name: this.pessoa.nome,
        email: this.pessoa.email,
        active: isActive,
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.pessoa = data as Pessoa;
        },
        (error) => console.log(error)
      );
  }
}
