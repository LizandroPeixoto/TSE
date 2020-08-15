import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PessoasListComponent } from "./pessoas-list/pessoas-list.component";
import { CreatePessoaComponent } from "./create-pessoa/create-pessoa.component";
import { SearchPessoasComponent } from "./search-pessoas/search-pessoas.component";

const routes: Routes = [
  { path: "", redirectTo: "pessoa", pathMatch: "full" },
  { path: "pessoa", component: PessoasListComponent },
  { path: "adicionar", component: CreatePessoaComponent },
  { path: "filtrar", component: SearchPessoasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
