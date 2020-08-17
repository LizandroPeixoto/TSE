import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateLogPreventComponent } from "./create-logPrevent.component";

describe("CreatelogPreventComponent", () => {
  let component: CreateLogPreventComponent;
  let fixture: ComponentFixture<CreateLogPreventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLogPreventComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLogPreventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
