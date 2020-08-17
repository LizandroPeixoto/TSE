import { LogPrevent } from "./../../models/logPrevent";
import { LogPreventService } from "./../../logPrevent.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"],
})
export class UploadComponent implements OnInit {
  fileToUpload: File = null;
  logPrevent: LogPrevent = new LogPrevent();

  constructor(private logPreventService: LogPreventService) {}

  ngOnInit() {}

  handleFileInput(files: FileList) {
    if (files && files.length > 0) {
      const file: File = files.item(0);
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        const arquivo: string = reader.result as string;
        this.leArquivo(arquivo);
      };
    }
  }
  leArquivo(arquivo: any) {
    console.log(arquivo);
    const allTextLines = arquivo.split(/\r?\n|\r/);
    const headers = allTextLines[0].split("|");
    const lines = [];
    for (let i = 0; i < allTextLines.length; i++) {
      const data = allTextLines[i].split("|");
      if (data.length === headers.length) {
        const tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        // console.log(tarr);
        this.gravarArquivo(tarr);
        lines.push(tarr);
      }
    }
  }
  gravarArquivo(arquivo: any) {
    this.logPrevent.data = arquivo[0].replace('"', "").replace('"', "");
    this.logPrevent.ip = arquivo[1].replace('"', "").replace('"', "");
    this.logPrevent.request = arquivo[2].replace('"', "").replace('"', "");
    this.logPrevent.status = arquivo[3].replace('"', "").replace('"', "");
    this.logPrevent.user_agent = arquivo[4].replace('"', "").replace('"', "");

    console.log(this.logPrevent);

    // this.logPreventService.createLogPrevent(this.logPrevent).subscribe(
    //   (data) => console.log(data),
    //   (error) => console.log(error)
    // );
    // this.logPrevent = new LogPrevent();
  }
}
