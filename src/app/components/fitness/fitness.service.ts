import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FitnessRequest {
  age: number;
  gender: string;
  goal: string;
  fitness_level: string;
  preferences?: string;
}

export interface FitnessResponse {
  workout_plan: string;
  diet_plan: string;
  tips: string;
}

@Injectable({
  providedIn: 'root'
})
export class FitnessService {
  // FastAPI endpoint
  // private apiUrl = 'http://127.0.0.1:8000/fitness'; 
  private apiUrl = 'https://fastapi-app-36j5.onrender.com/fitness'

  constructor(private http: HttpClient) {}

  getFitnessPlan(payload: FitnessRequest): Observable<FitnessResponse> {
    return this.http.post<FitnessResponse>(this.apiUrl, payload);
  }
}
