import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import {AppUser} from './models/app-user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private afDB: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.afDB.object(`/users/${user.uid}`).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): Observable<AppUser> {
    return this.afDB.object<AppUser>(`/users/${uid}`).valueChanges();
  }

}
