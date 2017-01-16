import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  public data: number[];
  public labels: string[];
  public colors: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data = [];
    this.labels = [];

    for (let i = 0; i < 6; i++) {
      this.data.push(Math.floor(Math.random() * 30));
      this.labels.push("Serie " + i);
    }

    this.colors = [
              "#C2185B",
              "#E91E63",
              "#F8BBD0",
              "#FF9800",
              "#009688",
              "#795548"
          ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

}
