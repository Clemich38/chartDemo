import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html'
})
export class Page6 {

  public data: number[];
  public datas: Array<number[]>;
  public dataLabels: string[];
  public xLabels: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.datas = [];
    this.dataLabels = [];
    this.xLabels = [];

    for (let i = 0; i < 2; i++) 
    {
      this.data = [];
      this.xLabels = [];
      for (let j = 0; j < 6; j++)
      {
        this.data.push(Math.floor(Math.random() * 8) + 2);
        this.xLabels.push("label" + j);
      }
      this.datas.push(this.data);
      this.dataLabels.push("dataset " + i);
    }

  }

}
