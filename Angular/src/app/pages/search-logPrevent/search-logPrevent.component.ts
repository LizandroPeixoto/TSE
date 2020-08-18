import { LogPreventService } from "../../logPrevent.service";
import { LogPrevent } from "../../models/logPrevent";
import { OnInit, Component } from "@angular/core";

@Component({
  selector: "search-logPrevent",
  templateUrl: "./search-logPrevent.component.html",
  styleUrls: ["./search-logPrevent.component.css"],
})
export class SearchLogPreventComponent implements OnInit {
  ip: string;
  user_agent: string;

  logPrevent: LogPrevent[];

  constructor(private dataService: LogPreventService) {}

  ngOnInit() {
    this.ip = "";
    this.user_agent = "";
  }

  private searchLogPrevent() {
    this.dataService
      .getListalogPreventsporFiltro(this.ip, this.user_agent)
      .subscribe((logPrevent) => (this.logPrevent = logPrevent));
  }

  onSubmit() {
    this.searchLogPrevent();
  }
}
