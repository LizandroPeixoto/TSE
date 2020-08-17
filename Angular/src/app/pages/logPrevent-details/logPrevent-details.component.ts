import { LogPreventService } from "../../logPrevent.service";
import { LogPrevent } from "../../models/logPrevent";
import { OnInit, Input, Component } from "@angular/core";
import { LogPreventListComponent } from "../logPrevent-list/logPrevent-list.component";

@Component({
  selector: "logPrevent-details",
  templateUrl: "./logPrevent-details.component.html",
  styleUrls: ["./logPrevent-details.component.css"],
})
export class LogPreventDetailsComponent implements OnInit {
  @Input() logPrevent: LogPrevent;

  constructor(
    private logPreventService: LogPreventService,
    private listComponent: LogPreventListComponent
  ) {}

  ngOnInit() {}

  updateActive(isActive: boolean) {
    this.logPreventService
      .updateLogPrevent(this.logPrevent.id, {
        name: this.logPrevent.nome,
        email: this.logPrevent.email,
        active: isActive,
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.logPrevent = data as LogPrevent;
        },
        (error) => console.log(error)
      );
  }
}
