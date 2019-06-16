import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  constructor(private trainingExercise: TrainingService) { }
  public exercises: Exercise[];

  ngOnInit() {
    this.exercises = this.trainingExercise.getAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    if(form) {
      this.trainingExercise.startExercise(form.value.exercise);
    }
  }

}
