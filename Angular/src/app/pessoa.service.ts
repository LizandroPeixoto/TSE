import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PessoaService {
  private baseUrl = "http://localhost:4200/api";

  constructor(private http: HttpClient) {}

  getListaPessoas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/todasPessoas`);
  }

  createPessoa(pessoa: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/criarPessoas`, pessoa);
  }

  updatePessoa(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getPessoasByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/email/${email}`);
  }
}
