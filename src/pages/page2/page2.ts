import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {ChartComponent} from '../../components/chartComponent';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  public temp: number[];
  public hours: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.temp = [];
    this.hours = [];

    for (let i = 0; i < 10; i++) {
      this.temp.push(i);
      this.hours.push(i + 'h');
    }

  }

}
