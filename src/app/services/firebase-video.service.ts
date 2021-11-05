import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { database } from 'firebase';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class FirebaseVideoService {
  setUrl: string;

  constructor(private firestore: AngularFirestore) {}

  async createCourse(data: any): Promise<string> {
    console.log(data);
    const courseCreator = await this.firestore.collection('CourseX').add(data);
    console.log(courseCreator);
    return 'success';
  }

  getCourse() {
    console.log('here');
    var lessons
    return this.firestore.collection('CourseX').snapshotChanges();
    
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
 

}
