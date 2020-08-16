
import { RouterModule, Routes } from "@angular/router";
import { PessoasListComponent } from "./pages/pessoas-list/pessoas-list.component";
import { CreatePessoaComponent } from "./pages/create-pessoa/create-pessoa.component";
import { SearchPessoasComponent } from "./pages/search-pessoas/search-pessoas.component";
import { UploadComponent } from "./pages/upload/upload.component";
import { NgModule } from "@angular/core";

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
