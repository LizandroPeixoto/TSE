import { LogPreventService } from "./../../logPrevent.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchLogPreventComponent } from "./search-logPrevent.component";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

describe("SearchlogPreventsComponent", () => {
  let component: SearchLogPreventComponent;
  let fixture: ComponentFixture<SearchLogPreventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchLogPreventComponent],
      imports: [HttpClientTestingModule, RouterModule, FormsModule],
      providers: [LogPreventService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLogPreventComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
