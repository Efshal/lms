import { Injectable, NgZone } from '@angular/core';
import firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { retry } from 'rxjs-compat/operator/retry';


// import ms from 'ms';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
    ) {}

  async googleLogin() {
    let response: any;
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(async (value) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        const user=await this.getInfo();
        let data={
          uid:user.uid,
          pro:false
        }
        console.log(data)
        if(value.additionalUserInfo.isNewUser===true){
          this.addUsers(data)
        }
        console.log('Sucess', value.additionalUserInfo.isNewUser), (response = value);
      })
      .catch((error) => {
        response = error;
        console.log('Something went wrong: ', error);
      });
  }

  async getInfo() {
    console.log('here at authh');
    const user = firebase.auth().currentUser;
    if(user){
    console.log(user);
    return user;
    }else{
      console.log("null")
      return null
    }
  }

  async loginInfo(){
    console.log('loginn'); 
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {

        console.log(user)
        return user
      } else {
        console.log("none")
        return null
      }
    });
  }

  async checkUser(uid){
    console.log("check user")
    const user=await this.firestore
    .collection('Users')
    .ref
    .where('uid','==',uid)
    .get()

    console.log(user)
    const snapshot=user[0];
    console.log(snapshot)
    const data=snapshot.data
    console.log(data)
  }

  async addUsers(data:any){
    console.log("add user")
    // this.checkUser(data.uid)
    const user=await this.firestore.collection('Users').add(data);
  }

  private oAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider);
  }
  async emailSignup(email: string, password: string) {
    let result:any
    await this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(async value => {
    console.log('Sucess', value); 
    console.log(value)
    const user=await this.getInfo();
        let data={
          uid:user.uid,
          pro:false
        }
        console.log(data)
        if(value.additionalUserInfo.isNewUser===true){
          this.addUsers(data)
        }
    result=value
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
      result=error
      
    });

    console.log(result)
    return result
  }


  async login(email: string, password: string) {
    let result:any
    await this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      result=value
      this.getInfo()
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
      result=err
    });
    return result
  }


}
