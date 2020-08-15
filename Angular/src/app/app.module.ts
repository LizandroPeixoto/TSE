import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CreatePessoaComponent } from "./create-pessoa/create-pessoa.component";
import { PessoaDetailsComponent } from "./pessoa-details/pessoa-details.component";
import { PessoasListComponent } from "./pessoas-list/pessoas-list.component";
import { SearchPessoasComponent } from "./search-pessoas/search-pessoas.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { UploadComponent } from "./upload/upload.component";

@NgModule({
  declarations: [
    AppComponent,
    CreatePessoaComponent,
    PessoaDetailsComponent,
    PessoasListComponent,
    SearchPessoasComponent,
    UploadComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
