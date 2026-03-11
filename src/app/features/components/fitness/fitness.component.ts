import { Component } from '@angular/core';
import { FitnessService, FitnessRequest, FitnessResponse } from './fitness.service';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.scss']
})
export class FitnessComponent {
userInput: FitnessRequest = {
    age: 25,
    gender: 'Male',
    goal: 'Muscle Gain',
    fitness_level: 'Beginner',
    preferences: ''
  };

  result: FitnessResponse | null = null;
  loading = false;

  constructor(private fitnessService: FitnessService) {}

  generatePlan() {
    this.loading = true;

    this.fitnessService.getFitnessPlan(this.userInput).subscribe({
      next: (response) => {
        this.result = response;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
