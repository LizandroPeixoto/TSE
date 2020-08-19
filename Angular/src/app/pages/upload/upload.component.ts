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
  logPrevent: LogPrevent[] = [];

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
        this.gravarArquivo(tarr);
        lines.push(tarr);
      }
    }
    this.gravarArquivoBanco();
  }
  gravarArquivo(arquivo: any) {
    this.logPrevent.push({
      data: arquivo[0].replace(" ", "T"),
      ip: arquivo[1].replace('"', "").replace('"', ""),
      request: arquivo[2].replace('"', "").replace('"', ""),
      status: arquivo[3],
      user_agent: arquivo[4].replace('"', "").replace('"', ""),
    });
  }
  gravarArquivoBanco() {
    console.log(this.logPrevent);
    this.logPreventService.createLogPreventArquivo(this.logPrevent).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}
