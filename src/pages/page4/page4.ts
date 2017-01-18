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
              "#3F51B5",
              "#00BCD4",
              "#8BC34A",
              "#FFC107"
          ];}

}
