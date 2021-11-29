import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { database } from 'firebase';
import { stringify } from 'querystring';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseVideoService {
  setUrl: string;

  constructor(private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,

    )
   {}

  async createCourse(data: any): Promise<string> {
    console.log(data);
    const courseCreator = await this.firestore.collection('CourseX').add(data);
    console.log(courseCreator);
    return 'success';
  }

  async getCourse(name:string) {
    const user=await this.getInfo()
    console.log(user,"funcc");
    console.log('here',name);
    var lessons
    const lesson=await this.firestore.collection('LessonX').doc(name).get()
    console.log(lesson,"check")
    const snapshot =  await lesson.toPromise();

    const data = snapshot.data();
    console.log(data['videoUrl']);
    return data['videoUrl']
  }


  setUrlFunc(url) {
    this.setUrl = url;
    console.log(this.setUrl);
  }

  getUrl() {
    return this.setUrl;
  }

  async getLesson(url: string) {
    console.log('here at get lesson');
    const lesson = await this.firestore
      .collection('CourseX')
      .ref.where('link', '==', url)
      .get();
    console.log('hello');
    const snapshot = lesson.docs[0];
    const data = snapshot.data();
    console.log(data);
    return data;
  }
  async getTagLesson(tag:string){

    const data= [];
    const lesson = await this.firestore
      .collection('CourseX')
      .ref.where('tags', 'array-contains',tag)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
            data.push(doc.data())
        });
    });
    console.log(data)
    return data
  }
  async getInfo() {
    console.log('here at authh');
    const user = await this.afAuth.currentUser;
    if(user){
    console.log(user);
    return user;
    }
    else{
      console.log("null")
      return null
    }
    
  }

  async getCourseAtribute(name:string) {
    const user=await this.getInfo()
    let data
    console.log(user,"funcc");
    console.log('here',name);
    var lessons
    const lesson=await this.firestore
    .collection('LessonX')
    .ref
    .doc(name)
    .get()
    .then((snapshot)=>{
    data = snapshot.data();
    console.log(data['videoUrl']);
    })
    .catch((err)=>{
      console.log("in error",err)
    })
    if(data){
    return data['proVideo']
    }
    else{
      console.log("elsee")
      return true
    }
  }

}
