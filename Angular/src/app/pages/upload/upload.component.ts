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
        this.gravarArquivo(tarr);
        lines.push(tarr);
      }
    }
    console.log(this.logPrevent);
  }
  gravarArquivo(arquivo: any) {
    this.logPrevent.push(arquivo);
  }
}
