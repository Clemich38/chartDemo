import { Component, ElementRef, Input, OnDestroy, OnInit, OnChanges} from '@angular/core';

declare var Chart: any;


@Component({
  selector: 'radar-chart',
  template: `<canvas width="400" height="250"></canvas>`
})

export class ChartRadarComp implements OnChanges, OnInit, OnDestroy {

  @Input() datas: Array<number[]>;
  @Input() dataLabels: string[];
  @Input() xLabels: string[];
  @Input() colors: string[];

  private el: ElementRef;
  private ctx: any;
  private chart: any;

  private m_colors: string[];

  public constructor(el: ElementRef) {
    this.el = el;

    this.m_colors = [
              "42, 157, 143",
              "233, 196, 106",
              "244, 162, 97",
              "231, 111, 81",
              "38, 70, 83"
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

    // Custom color
    if (this.colors)
      this.m_colors = this.colors;

    let line = this._constructChart();

    for(let i in this.datas)
    {
      line.data.datasets.push({label: this.dataLabels[i],
                               data: this.datas[i],
                               borderColor: "rgba(" + this.m_colors[i] + ",1)",
                               backgroundColor: "rgba(" + this.m_colors[i] + ",0.2)",
                               fill: true
                              });
    }
    line.data.labels = this.xLabels;

    this.chart = new Chart(this.el.nativeElement.children[0], line)
  }       

  private _constructChart() {
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