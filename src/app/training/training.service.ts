import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';

export class TrainingService {

    exerciseChanged = new Subject<Exercise>();
   private availableExercises: Exercise[] = [
        {id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
        {id: 'touch-toes', name: 'Touch Toes', duration: 130, calories: 18},
        {id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 80},
        {id: 'burpees', name: 'Burpees', duration: 60, calories: 50}
    ];

    private runningExercise: Exercise;
    private exercises: Exercise[] = [];

    getAvailableExercises() {
        return this.availableExercises.slice();
    }

    startExercise(selectedId: string){
        const selectedExercise = this.availableExercises
        .find(ex => ex.id === selectedId);
        this.runningExercise = selectedExercise;
        this.exerciseChanged.next({...this.runningExercise});
    }

    completeExercise() {
        this.exercises.push({...this.runningExercise, date: new Date(), state: 'completed'});
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    cancelExercise(progress: number) {
        this.exercises.push({...this.runningExercise,
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

    getCompletedOrCancelledExercise(){
        return this.exercises.slice();
    }

}
