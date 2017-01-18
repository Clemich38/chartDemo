import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class Page5 {

  public data: number[];
  public datas: Array<{data: number[]}>;
  public dataLabels: string[];
  public xLabels: string[];
  public colors: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.datas = [];
    this.dataLabels = [];
    this.xLabels = [];

    for (let i = 0; i < 2; i++) 
    {
      this.data = [];
      this.xLabels = [];
      for (let j = 0; j < 10; j++)
      {
        this.data.push(Math.floor(Math.random() * 30) + 2);
        this.xLabels.push("label" + j);
      }
      this.datas.push({data: this.data});
      this.dataLabels.push("dataset " + i);
    }

    this.colors = ["#3F51B5",
                   "#00BCD4"];
  }
}
