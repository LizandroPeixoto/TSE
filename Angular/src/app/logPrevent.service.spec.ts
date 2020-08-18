import { TestBed, inject } from "@angular/core/testing";

import { LogPreventService } from "./logPrevent.service";
import { HttpClientModule } from "@angular/common/http";

describe("LogPreventService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LogPreventService],
    });
  });

  it("should be created", inject(
    [LogPreventService],
    (service: LogPreventService) => {
      expect(service).toBeTruthy();
    }
  ));
});
