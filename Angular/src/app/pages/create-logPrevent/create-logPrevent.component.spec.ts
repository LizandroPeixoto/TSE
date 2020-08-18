import { LogPrevent } from "./../../models/logPrevent";
import { LogPreventService } from "./../../logPrevent.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateLogPreventComponent } from "./create-logPrevent.component";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

describe("CreatelogPreventComponent", () => {
  let component: CreateLogPreventComponent;
  let fixture: ComponentFixture<CreateLogPreventComponent>;
  let service: LogPreventService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLogPreventComponent],
      imports: [HttpClientTestingModule, RouterModule, FormsModule],
      providers: [LogPreventService],
    }).compileComponents();
    service = TestBed.get(LogPreventService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLogPreventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("ngOnInit", () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it("CreateLogPrevent", () => {
    const logPrevent: LogPrevent = new LogPrevent();
    service.createLogPrevent(logPrevent).subscribe();
    // const req = httpMock.expectOne(`${this.baseUrl}/criarLog/${logPrevent}`);
    // expect(req.request.method).toBe("POST");
  });
});
