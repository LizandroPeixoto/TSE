import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchLogPreventComponent } from "./search-logPrevent.component";

describe("SearchlogPreventsComponent", () => {
  let component: SearchLogPreventComponent;
  let fixture: ComponentFixture<SearchLogPreventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchLogPreventComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLogPreventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
