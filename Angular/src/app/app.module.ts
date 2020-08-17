import { CardModule } from "primeng/card";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CreateLogPreventComponent } from "./pages/create-logPrevent/create-logPrevent.component";
import { SearchLogPreventComponent } from "./pages/search-logPrevent/search-logPrevent.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { UploadComponent } from "./pages/upload/upload.component";
import { LogPreventDetailsComponent } from "./pages/logPrevent-details/LogPreventDetailsComponent";
import { LogPreventListComponent } from "./pages/logPrevent-list/logPrevent-list.component";

@NgModule({
  declarations: [
    AppComponent,
    CreateLogPreventComponent,
    LogPreventDetailsComponent,
    LogPreventListComponent,
    SearchLogPreventComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
