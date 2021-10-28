import { Injectable, NgZone } from '@angular/core';
import firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from '@angular/fire/auth';

// import ms from 'ms';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  async googleLogin() {
    let response: any;
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then((value) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        console.log('Sucess', value), (response = value);
      })
      .catch((error) => {
        response = error;
        console.log('Something went wrong: ', error);
      });
  }

  async getInfo(): Promise<any> {
    console.log('here at authh');
    const user = await firebase.auth().currentUser;
    console.log(user);
    return user;
  }

  private oAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider);
  }
}
