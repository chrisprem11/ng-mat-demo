import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';
import { UIService } from '../../ui.service';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  public exercises: Exercise[];
  exerciseSubscription: Subscription;
  private loadingSubscription: Subscription;
  public isLoading = false;

  constructor(private trainingService: TrainingService, private uiService: UIService) { }

  ngOnInit() {
  this.loadingSubscription = this.uiService.loadingStateChanged.subscribe( isLoading => {
    this.isLoading = isLoading;
  });
  this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe( exercises => {
     this.exercises = exercises;
   });

  this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    if(form) {
      this.trainingService.startExercise(form.value.exercise);
    }
  }

  ngOnDestroy() {
    if (this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe();

    }
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }

}
