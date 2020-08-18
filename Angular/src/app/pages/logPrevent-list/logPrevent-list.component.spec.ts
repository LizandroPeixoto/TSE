import { LogPreventService } from "./../../logPrevent.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LogPreventListComponent } from "./logPrevent-list.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("logPreventListComponent", () => {
  let component: LogPreventListComponent;
  let fixture: ComponentFixture<LogPreventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogPreventListComponent],
      imports: [HttpClientTestingModule, RouterModule, FormsModule],
      providers: [LogPreventService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
