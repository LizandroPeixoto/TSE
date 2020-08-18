import { LogPreventService } from "./../../logPrevent.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateLogPreventComponent } from "./create-logPrevent.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

describe("CreatelogPreventComponent", () => {
  let component: CreateLogPreventComponent;
  let fixture: ComponentFixture<CreateLogPreventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLogPreventComponent],
      imports: [HttpClientTestingModule, RouterModule, FormsModule],
      providers: [LogPreventService],
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
