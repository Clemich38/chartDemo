import { Component, ElementRef, Input, OnDestroy, OnInit, OnChanges} from '@angular/core';

declare var Chart: any;


@Component({
  selector: 'bar-chart',
  template: `<canvas width="400" height="250"></canvas>`
})

export class ChartBarComp implements OnChanges, OnInit, OnDestroy {

  @Input() datas: Array<number[]>;
  @Input() dataLabels: string[];
  @Input() xLabels: string[];
  @Input() colors: string[];
  @Input() horizontal: boolean;
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

    // Default colors
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
    if (this.datas && this.dataLabels) {
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
                               data: this.datas[i],
                               borderColor: "rgba(" + this.m_colors[i] + ",1)",
                               backgroundColor: "rgba(" + this.m_colors[i] + ",1)",
                               hoverBackgroundColor: "rgba(" + this.m_colors[i] + ",1)",
                               hoverBorderColor: "rgba(" + this.m_colors[i] + ",1)",
                               fill: true
                              });
    }
    line.data.labels = this.xLabels;

    this.chart = new Chart(this.el.nativeElement.children[0], line)
  }

  private _constructChart() {
    let type = this.horizontal? 'horizontalBar' : 'bar';
    return {
      type: type,
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
            }
          }]
        }
      }
    };
  }
}