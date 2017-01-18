import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  public datas: number[];
  public dataLabels: string[];
  public colors: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.datas = [];
    this.dataLabels = [];

    for (let i = 0; i < 6; i++) {
      this.datas.push(Math.floor(Math.random() * 20) + 2);
      this.dataLabels.push("label " + i);
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
