import { TableModule } from "primeng/table";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CreatePessoaComponent } from "./pages/create-pessoa/create-pessoa.component";
import { SearchPessoasComponent } from "./pages/search-pessoas/search-pessoas.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { UploadComponent } from "./pages/upload/upload.component";
import { PessoaDetailsComponent } from "./pages/pessoa-details/PessoaDetailsComponent";
import { PessoasListComponent } from "./pages/pessoas-list/pessoas-list.component";

@NgModule({
  declarations: [
    AppComponent,
    CreatePessoaComponent,
    PessoaDetailsComponent,
    PessoasListComponent,
    SearchPessoasComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
