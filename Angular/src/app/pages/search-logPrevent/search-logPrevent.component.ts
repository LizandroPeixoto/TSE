import { LogPreventService } from "../../logPrevent.service";
import { LogPrevent } from "../../models/logPrevent";
import { OnInit, Component } from "@angular/core";

@Component({
  selector: "search-logPrevent",
  templateUrl: "./search-logPrevent.component.html",
  styleUrls: ["./search-logPrevent.component.css"],
})
export class SearchLogPreventComponent implements OnInit {
  email: string;
  logPrevent: LogPrevent[];

  constructor(private dataService: LogPreventService) {}

  ngOnInit() {
    this.email = "";
  }

  private searchLogPrevent() {
    this.dataService
      .getLogPreventByEmail(this.email)
      .subscribe((logPrevent) => (this.logPrevent = logPrevent));
  }

  onSubmit() {
    this.searchLogPrevent();
  }
}
