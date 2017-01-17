import { Component, ElementRef, Input, OnDestroy, OnInit, OnChanges} from '@angular/core';

declare var Chart: any;


@Component({
  selector: 'radar-chart',
  template: `<canvas width="400" height="250"></canvas>`
})

export class ChartRadarComp implements OnChanges, OnInit, OnDestroy {

  @Input() xLabels: string[];
  @Input() datas: Array<{data: number[]}>;
  @Input() title: string;

  private el: ElementRef;
  private ctx: any;
  private chart: any;

  private colorTab: string[];

  public constructor(el: ElementRef) {
    this.el = el;

    this.colorTab = [
              "#F44336",
              "#3F51B5",
              "#4CAF50",
              "#FF9800",
              "#009688",
              "#795548",
              "#FFEB3B",
              "#03A9F4",
              "#E91E63",
              "#607D8B",
              "#9C27B0",
              "#CDDC39",
              "#FFC107",
              "#00BCD4",
              "#FF5722",
              "#9E9E9E"
          ];
  }

  public ngOnInit() {
    this.ctx = this.el.nativeElement.children[0];
  }

  public ngOnChanges() {
    if (this.datas && this.xLabels) {
      this._create();
    }
  }

  public ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  private _create() {

    this.ngOnDestroy();

    let line = this._constructLineChart(this.datas[0].data);

    for(let i in this.datas)
    {
      line.data.datasets.push({label: this.title,
                               data: this.datas[i].data,
                               borderColor: this.colorTab[i],
                               backgroundColor: this.colorTab[i] + "20",
                               fill: true
                              });
    }
    line.data.labels = this.xLabels;

    this.chart = new Chart(this.el.nativeElement.children[0], line)
  }       

  private _constructLineChart(datas: number[]) {
    return {
      type: 'radar',
      data: {
        labels: [],
        datasets: []
      },
      options: {
        scales: [{
          ticks: {
            beginAtZero: true
          },
          yAxes: [{
            display: false,
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              display: false
            }
          }]
        }]
      }
    };
  }
}