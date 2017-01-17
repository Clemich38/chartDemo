import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page7',
  templateUrl: 'page7.html'
})
export class Page7 {

  public data: Array<{x: number, y: number, r: number}>;

  // Array of datasets to pass to the bubble chart component
  public datas: Array<{data: Array<{x: number, y: number, r: number}>}>;
  public titles: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.datas = [];
    this.titles = [];

    for (let i = 0; i < 2; i++) 
    {
      this.data = [];
      for (let j = 0; j < 10; j++) 
      {
        this.data.push({x: Math.floor(Math.random() * 8) + 1,
                        y: Math.floor(Math.random() * 20) + 1,
                        r: Math.floor(Math.random() * 10) + 3});
      }
      this.datas.push({data: this.data});
      this.titles.push("dataset " + i);
    }

  }

}
