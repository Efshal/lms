import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { FirebaseVideoService } from '../services/firebase-video.service';
import { ImgFile } from './imgFile';
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.page.html',
  styleUrls: ['./admin-portal.page.scss'],
})
export class AdminPortalPage implements OnInit {
  defaultDate = '1987-06-30';
  isSubmitted = false;
  addtag: string;
  allTags = [];

  ionicForm: FormGroup;
  // File upload task
  fileUploadTask: AngularFireUploadTask;

  // Upload progress
  percentageVal: Observable<number>;

  // Track file uploading with snapshot
  trackSnapshot: Observable<any>;

  // Uploaded File URL
  uploadedImageURL: Observable<string>;

  // Uploaded image collection
  files: Observable<ImgFile[]>;

  // Image specifications
  imgName: string;
  imgSize: number;

  // File uploading status
  isFileUploading: boolean;
  isFileUploaded: boolean;

  finalUrl: string;

  private filesCollection: AngularFirestoreCollection<ImgFile>;

  constructor(
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage,
    public formBuilder: FormBuilder,
    private videoService: FirebaseVideoService
  ) {
    this.isFileUploading = false;
    this.isFileUploaded = false;

    // Define uploaded files collection
    this.filesCollection = afs.collection<ImgFile>('imagesCollection');
    this.files = this.filesCollection.valueChanges();
  }
  addTag() {
    this.allTags.push(this.addtag);
    this.addtag = '';
  }

  async uploadImage(event: any) {
    const file = event.target.files.item(0);
    console.log('hello uploadImage');
    // Image validation
    if (file.type.split('/')[0] !== 'image') {
      console.log('File type is not supported!');
      return;
    }

    this.isFileUploading = true;
    this.isFileUploaded = false;

    this.imgName = file.name;

    // Storage path
    const fileStoragePath = `filesStorage/${new Date().getTime()}_${file.name}`;

    // Image reference
    const imageRef = this.afStorage.ref(fileStoragePath);

    // File upload task
    this.fileUploadTask = this.afStorage.upload(fileStoragePath, file);
    console.log('hello2');

    // Show uploading progress
    this.percentageVal = this.fileUploadTask.percentageChanges();
    // imageRef.getDownloadURL().subscribe(
    //   (res) => console.log("res", res),
    //   (err) => console.log(err)
    // );

    console.log('hello4');
    // console.log("url1", imageRef.getDownloadURL());
    await imageRef.getDownloadURL().subscribe(
      (res) => console.log('res', res),
      (err) => console.log(err)
    );
    this.uploadedImageURL = await imageRef.getDownloadURL();
    console.log('url', imageRef.getDownloadURL());

    this.uploadedImageURL.subscribe(
      (resp) => {
        console.log('here at upload');
        console.log(resp);
        this.finalUrl = resp;
        console.log(this.finalUrl);
        this.storeFilesFirebase({
          name: file.name,
          filepath: resp,
          size: this.imgSize,
        });
        this.isFileUploading = false;
        this.isFileUploaded = true;
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );

    this.trackSnapshot = this.fileUploadTask.snapshotChanges().pipe(
      finalize(() => {
        // Retreive uploaded image storage path
        // console.log("hello4");
        // // console.log("url1", imageRef.getDownloadURL());
        // imageRef.getDownloadURL().subscribe(
        //   (res) => console.log("res", res),
        //   (err) => console.log(err)
        // );
        // this.uploadedImageURL =imageRef.getDownloadURL();
        // console.log("url", imageRef.getDownloadURL());
        // this.uploadedImageURL.subscribe(
        //   (resp) => {
        //     console.log(resp);
        //     this.storeFilesFirebase({
        //       name: file.name,
        //       filepath: resp,
        //       size: this.imgSize,
        //     });
        //     this.isFileUploading = false;
        //     this.isFileUploaded = true;
        //   },
        //   (error) => {
        //     console.log("error");
        //     console.log(error);
        //   }
        // );
      }),
      tap((snap) => {
        this.imgSize = snap.totalBytes;
      })
    );
    console.log('trackshot', this.trackSnapshot);
  }

  storeFilesFirebase(image: ImgFile) {
    console.log('here at');
    const fileId = this.afs.createId();
    this.filesCollection
      .doc(fileId)
      .set(image)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      thumbnail: [''],
      title: [''],
      description: [''],
      link: [''],
      creator: [''],
      tags: [''],
    });
  }

  getDate(e) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
      onlyself: true,
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.finalUrl);
      this.ionicForm.value.tags = this.allTags;
      this.ionicForm.value.thumbnail = this.finalUrl;
      const data = this.ionicForm.value;
      console.log(this.ionicForm.value);
      const resp = await this.videoService.createCourse(data);
      console.log(resp);
    }
  }

  removeTag(tag) {
    const index = this.allTags.indexOf(tag);
    if (index > -1) {
      this.allTags.splice(index, 1);
    }
  }
}
