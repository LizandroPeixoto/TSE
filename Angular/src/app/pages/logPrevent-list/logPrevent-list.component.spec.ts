import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LogPreventListComponent } from "./logPrevent-list.component";

describe("logPreventListComponent", () => {
  let component: LogPreventListComponent;
  let fixture: ComponentFixture<LogPreventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogPreventListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogPreventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
