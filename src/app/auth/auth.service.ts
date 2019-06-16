import {Subject} from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth.data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user: User;
    public authChange = new Subject<boolean>();

    constructor(private router: Router){}

    registerUSer(authData: AuthData){
        this.user = {
                email : authData.email,
                userId: Math.round(Math.random() * 1000).toString()
        }
        this.authSuccessfully();
    }

    login(authData: AuthData){
        this.user = {
            email : authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        }
        this.authSuccessfully();
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    getUser() {
        return {...this.user};
    }

    isAuth() {
        return this.user != null;
    }

    private authSuccessfully(){
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}
