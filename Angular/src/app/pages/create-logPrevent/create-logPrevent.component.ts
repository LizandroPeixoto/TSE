import { Component, OnInit } from "@angular/core";

import { LogPrevent } from "../../models/logPrevent";
import { LogPreventService } from "../../logPrevent.service";

@Component({
  selector: "create-logPrevent",
  templateUrl: "./create-logPrevent.component.html",
  styleUrls: ["./create-logPrevent.component.css"],
})
export class CreateLogPreventComponent implements OnInit {
  logPrevent: LogPrevent = new LogPrevent();
  submitted = false;

  constructor(private logPreventService: LogPreventService) {}

  ngOnInit() {}
  adicionar() {
    console.log(this.logPrevent);
    this.logPrevent.data = new Date(
      this.logPrevent.data.toString().replace(" ", "T")
    );
    this.logPreventService.createLogPrevent(this.logPrevent).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.logPrevent = new LogPrevent();
  }
}
