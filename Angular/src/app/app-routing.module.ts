import { RouterModule, Routes } from "@angular/router";
import { LogPreventListComponent } from "./pages/logPrevent-list/logPrevent-list.component";
import { CreateLogPreventComponent } from "./pages/create-logPrevent/create-logPrevent.component";
import { SearchLogPreventComponent } from "./pages/search-logPrevent/search-logPrevent.component";
import { UploadComponent } from "./pages/upload/upload.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "", redirectTo: "logPrevent", pathMatch: "full" },
  { path: "logPrevent", component: LogPreventListComponent },
  { path: "adicionar", component: CreateLogPreventComponent },
  { path: "filtrar", component: SearchLogPreventComponent },
  { path: "upload", component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
