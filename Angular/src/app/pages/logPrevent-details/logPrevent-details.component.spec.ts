import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { LogPreventService } from "src/app/logPrevent.service";
describe("LogPreventDetailsComponent", () => {
  let httpMock: HttpTestingController;
  let service: LogPreventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LogPreventService],
    });

    service = TestBed.get(LogPreventService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("should create", () => {
    expect(service).toBeTruthy();
  });
});
