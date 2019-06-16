import {Subject} from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth.data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { TrainingService } from '../training/training.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(private router: Router, private afAuth: AngularFireAuth, private trainingService: TrainingService){}

    initAuthListener(){
        this.afAuth.authState.subscribe(user => {
            if(user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/training']);
            } else {
                this.trainingService.cancelSunscriptions();
                this.isAuthenticated = false;
                this.authChange.next(false);
                this.router.navigate(['/login']);
            }
        })
    }

    registerUSer(authData: AuthData){
        this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password).then(result => {
        }).catch(error => {
            console.log(error);
        });
    }

    login(authData: AuthData){
        this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(result => {
        }).catch(error => {
            console.log(error);
        });
    }

    logout() {
        this.trainingService.cancelSunscriptions();
        this.afAuth.auth.signOut();
        this.isAuthenticated = false;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    isAuth() {
        return this.isAuthenticated;
    }
}
