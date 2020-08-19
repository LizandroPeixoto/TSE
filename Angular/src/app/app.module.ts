import { CardModule } from "primeng/card";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CreateLogPreventComponent } from "./pages/create-logPrevent/create-logPrevent.component";
import { SearchLogPreventComponent } from "./pages/search-logPrevent/search-logPrevent.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { UploadComponent } from "./pages/upload/upload.component";
import { LogPreventDetailsComponent } from "./pages/logPrevent-details/logPrevent-detailsComponent";
import { LogPreventListComponent } from "./pages/logPrevent-list/logPrevent-list.component";
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule } from "@angular/router";
import { ScrollPanelModule } from "primeng/scrollpanel";

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
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    RouterTestingModule,
    ScrollPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
