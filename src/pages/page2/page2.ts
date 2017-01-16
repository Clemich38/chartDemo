import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  public yValues: number[];
  public xValues: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.yValues = [];
    this.xValues = [];

    for (let i = 0; i < 20; i++) {
      this.yValues.push(Math.floor(Math.random() * 20));
      this.xValues.push(i + '');
    }

  }

}
