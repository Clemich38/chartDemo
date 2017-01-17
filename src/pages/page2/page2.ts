import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  public data: number[];
  public datas: Array<{data: number[]}>;
  public xLabels: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.datas = [];
    this.xLabels = [];

    for (let i = 0; i < 5; i++) 
    {
      this.data = [];
      this.xLabels = [];
      for (let j = 0; j < 10; j++)
      {
        this.data.push(Math.floor(Math.random() * 20));
        this.xLabels.push(j + '');
      }
      this.datas.push({data: this.data});
    }

  }

}
