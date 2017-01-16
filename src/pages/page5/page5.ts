import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class Page5 {

  public data: number[];
  public labels: string[];
  public colors: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data = [];
    this.labels = [];

    for (let i = 0; i < 10; i++) {
      this.data.push(Math.floor(Math.random() * 30));
      this.labels.push("Serie " + i);
    }

    this.colors = [
              "#3F51B5",
              "#00BCD4",
              "#8BC34A",
              "#FFC107"
          ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page4');
  }

}
