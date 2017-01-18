import { Component, ElementRef, Input, OnDestroy, OnInit, OnChanges} from '@angular/core';

declare var Chart: any;


@Component({
  selector: 'line-chart',
  template: `<canvas width="400" height="250"></canvas>`
})

export class ChartLineComp implements OnChanges, OnInit, OnDestroy {

  @Input() datas: Array<{data: number[]}>;
  @Input() dataLabels: string[];
  @Input() xLabels: string[];
  @Input() colors: string[];
  @Input() yMin: number;
  @Input() yMax: number;

  private el: ElementRef;
  private ctx: any;
  private chart: any;

  private m_colors: string[];
  private m_yMin: number;
  private m_yMax: number;

  public constructor(el: ElementRef) {
    this.el = el;

    this.m_colors = [
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

    // Custom color
    if (this.colors)
      this.m_colors = this.colors;
    if (this.yMin)
      this.m_yMin = this.yMin;
    if (this.yMax)
      this.m_yMax = this.yMax;

    let line = this._constructChart();

    for(let i in this.datas)
    {
      line.data.datasets.push({label: this.dataLabels[i],
                               data: this.datas[i].data,
                               borderColor: this.m_colors[i],
                               backgroundColor: this.m_colors[i] + "20",
                               fill: true
                              });
    }
    line.data.labels = this.xLabels;

    this.chart = new Chart(this.el.nativeElement.children[0], line)
  }       

  private _constructChart() {
    return {
      type: 'line',
      data: {
        labels: [],
        datasets: []
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: this.m_yMax,
              suggestedMin: this.m_yMin
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    };
  }
}