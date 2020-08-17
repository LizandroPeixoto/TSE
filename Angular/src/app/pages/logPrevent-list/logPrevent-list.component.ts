import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { LogPreventService } from "../../logPrevent.service";
import { LogPrevent } from "../../models/logPrevent";

@Component({
  selector: "logPrevent-list",
  templateUrl: "./logPrevent-list.component.html",
  styleUrls: ["./logPrevent-list.component.css"],
})
export class LogPreventListComponent implements OnInit {
  logPrevent: Observable<LogPrevent[]>;

  constructor(private logPreventService: LogPreventService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.logPrevent = this.logPreventService.getListalogPrevents();
  }
}
