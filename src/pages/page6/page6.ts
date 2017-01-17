import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html'
})
export class Page6 {

  public data: number[];
  public datas: Array<{data: number[]}>;
  public xLabels: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.datas = [];
    this.xLabels = [];

    for (let i = 0; i < 2; i++) 
    {
      this.data = [];
      this.xLabels = [];
      for (let j = 0; j < 6; j++)
      {
        this.data.push(Math.floor(Math.random() * 8) + 2);
        this.xLabels.push("Topic" + j);
      }
      this.datas.push({data: this.data});
    }

  }

}
