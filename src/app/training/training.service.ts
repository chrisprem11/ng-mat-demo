import { Exercise } from './exercise.model';
import { Subject, Subscription } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class TrainingService {

    exerciseChanged = new Subject<Exercise>();
    exercisesChanged = new Subject<Exercise[]>();
    finishedExercisesChanged = new Subject<Exercise[]>();
    private availableExercises: Exercise[] = [];
    private runningExercise: Exercise;
    private fbSubs: Subscription[] = [];

    constructor(public db: AngularFirestore) {}

    fetchAvailableExercises() {
        this.fbSubs.push(this.db.collection('availableExercises').snapshotChanges().pipe(
            map(docArray => {
              return docArray.map( doc => {
                return {
                  id: doc.payload.doc.id,
                  ...doc.payload.doc.data()
                }
              });
            })
          ).subscribe((exercises: Exercise[]) => {
              this.availableExercises = exercises;
              this.exercisesChanged.next([...this.availableExercises]);
          }));
    }

    startExercise(selectedId: string){
        this.db.doc('availableExercises/'+ selectedId).update({lastSelected: new Date()});
        const selectedExercise = this.availableExercises
        .find(ex => ex.id === selectedId);
        this.runningExercise = selectedExercise;
        this.exerciseChanged.next({...this.runningExercise});
    }

    completeExercise() {
        this.addDataToDatabase({...this.runningExercise, date: new Date(), state: 'completed'});
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    cancelExercise(progress: number) {
        this.addDataToDatabase({...this.runningExercise,
            date: new Date(),
            state: 'cancelled',
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.calories * (progress / 100)});
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    getRunningExercise() {
        return {...this.runningExercise};
    }

    fetchCompletedOrCancelledExercise(){
        this.fbSubs.push(this.db.collection('finishedExercises').valueChanges().subscribe((exercises: Exercise[]) => {
            this.finishedExercisesChanged.next(exercises);
        }));
    }

    cancelSunscriptions(){
        this.fbSubs.forEach(sub => sub.unsubscribe());
    }

    private addDataToDatabase(exercise: Exercise){
        this.db.collection('finishedExercises').add(exercise);
    }

}
