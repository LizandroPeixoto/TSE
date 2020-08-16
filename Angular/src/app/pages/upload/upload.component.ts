import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"],
})
export class UploadComponent implements OnInit {
  fileToUpload: File = null;

  constructor() {}

  ngOnInit() {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
