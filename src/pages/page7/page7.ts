import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page7',
  templateUrl: 'page7.html'
})
export class Page7 {

  public data: Array<{x: number, y: number, r: number}>;
  public datas: Array<{data: Array<{x: number, y: number, r: number}>}>;
  public xLabels: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.datas = [];
    this.xLabels = [];

    for (let i = 0; i < 2; i++) 
    {
      this.data = [];
      this.xLabels = [];
      for (let j = 0; j < 10; j++) 
      {
        this.data.push({x: Math.floor(Math.random() * 8) + 1,
                        y: Math.floor(Math.random() * 20) + 1,
                        r: Math.floor(Math.random() * 10) + 3});
        this.xLabels.push("Topic" + j);
      }
      this.datas.push({data: this.data});
    }

  }

}
