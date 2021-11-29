import { Component, OnInit } from '@angular/core';
// import KUTE from 'kute.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {
    // const tween = KUTE.fromTo(
    //   '#blob1',
    //   { path: '#blob1' },
    //   { path: '#blob2' },
    //   { repeat: 999, duration: 3000, yoyo: true }
    // ).start();
  }
}
