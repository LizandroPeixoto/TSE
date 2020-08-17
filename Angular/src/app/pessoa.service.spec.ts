import { TestBed, inject } from "@angular/core/testing";

import { LogPreventService } from "./logPrevent.service";

describe("LogPreventService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
