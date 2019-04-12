import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPessoasComponent } from './search-pessoas.component';

describe('SearchPessoasComponent', () => {
  let component: SearchPessoasComponent;
  let fixture: ComponentFixture<SearchPessoasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPessoasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
