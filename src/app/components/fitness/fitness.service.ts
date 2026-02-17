import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../../services/api-config.service';

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
  constructor(
    private http: HttpClient,
    private apiConfig: ApiConfigService
  ) {}

  getFitnessPlan(payload: FitnessRequest): Observable<FitnessResponse> {
    return this.http.post<FitnessResponse>(this.apiConfig.getFastApiEndpoint('/fitness'), payload);
  }
}
