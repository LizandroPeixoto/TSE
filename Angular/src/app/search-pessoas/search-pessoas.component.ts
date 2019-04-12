import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'search-pessoas',
  templateUrl: './search-pessoas.component.html',
  styleUrls: ['./search-pessoas.component.css']
})
export class SearchPessoasComponent implements OnInit {

  email: string;
  pessoas: Pessoa[];

  constructor(private dataService: PessoaService) { }

  ngOnInit() {
    this.email = '';
  }

  private searchPessoas() {
    this.dataService.getPessoasByEmail(this.email)
      .subscribe(pessoas => this.pessoas = pessoas);
  }

  onSubmit() {
    this.searchPessoas();
  }
}
