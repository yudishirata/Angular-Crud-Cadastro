import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroModel } from '../Models/CadastroModel';

const baseURL = 'https://localhost:44377/api/Cadastroes';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient) { }
  readAll(): Observable<any> {
    let headers = new HttpHeaders({
      "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT",
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return this.httpClient.get(baseURL, { headers: headers });
  }
  read(id: number): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data: CadastroModel): Observable<any> {
    let headers = new HttpHeaders({
      "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT",
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return this.httpClient.post(baseURL, data, {headers: headers });
  }

  update(id: number, data: CadastroModel): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteTelefone(id: number): Observable<any> {
    return this.httpClient.delete(`${baseURL}/telefone/${id}`);
  }

 

}
