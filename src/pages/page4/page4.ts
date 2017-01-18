import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class Page4 {

  public datas: number[];
  public dataLabels: string[];
  public colors: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.datas = [];
    this.dataLabels = [];

    for (let i = 0; i < 4; i++) {
      this.datas.push(Math.floor(Math.random() * 20) + 2);
      this.dataLabels.push("label " + i);
    }

    this.colors = [
              "38, 70, 83",
              "42, 157, 143",
              "233, 196, 106",
              "244, 162, 97",
              "231, 111, 81"
          ];
  }

}
