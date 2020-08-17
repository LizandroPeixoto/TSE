import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LogPreventDetailsComponent } from "./LogPreventDetailsComponent";

describe("LogPreventDetailsComponent", () => {
  let component: LogPreventDetailsComponent;
  let fixture: ComponentFixture<LogPreventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogPreventDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogPreventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
