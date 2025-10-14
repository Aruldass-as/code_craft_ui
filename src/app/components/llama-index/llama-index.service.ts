import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LlamaIndexService {
  // FastAPI endpoint
  // private apiUrl = 'http://127.0.0.1:8000/query'; 
  private apiUrl = 'https://fastapi-app-36j5.onrender.com/query'
  

  constructor(private http: HttpClient) {}

  queryData(query: string): Observable<any> {
    return this.http.post(this.apiUrl, { query });
  }
}
