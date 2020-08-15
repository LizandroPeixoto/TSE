import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PessoasListComponent } from "./pessoas-list/pessoas-list.component";
import { CreatePessoaComponent } from "./create-pessoa/create-pessoa.component";
import { SearchPessoasComponent } from "./search-pessoas/search-pessoas.component";
import { UploadComponent } from "./upload/upload.component";

const routes: Routes = [
  { path: "", redirectTo: "pessoa", pathMatch: "full" },
  { path: "pessoa", component: PessoasListComponent },
  { path: "adicionar", component: CreatePessoaComponent },
  { path: "filtrar", component: SearchPessoasComponent },
  { path: "upload", component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
