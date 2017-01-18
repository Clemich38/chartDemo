import { Component, ElementRef, Input, OnDestroy, OnInit, OnChanges} from '@angular/core';

declare var Chart: any;


@Component({
  selector: 'bubble-chart',
  template: `<canvas width="400" height="250"></canvas>`
})

export class ChartBubbleComp implements OnChanges, OnInit, OnDestroy {

  @Input() datas: Array<number[]>;
  @Input() dataLabels: string[];
  @Input() colors: string[];
  @Input() yMin: number;
  @Input() yMax: number;
  @Input() xMin: number;
  @Input() xMax: number;

  private el: ElementRef;
  private ctx: any;
  private chart: any;

  private m_colors: string[];
  private m_yMin: number;
  private m_yMax: number;
  private m_xMin: number;
  private m_xMax: number;

  public constructor(el: ElementRef) {
    this.el = el;

    this.m_yMin = 0;
    this.m_yMax = 0;
    this.m_xMin = 0;
    this.m_xMax = 0;

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
    if (this.xMin)
      this.m_xMin = this.xMin;
    if (this.xMax)
      this.m_xMax = this.xMax;

    let line = this._constructChart();

    for(let i in this.datas)
    {
      line.data.datasets.push({label: this.dataLabels[i],
                               data: this.datas[i],
                               borderColor: "rgba(" + this.m_colors[i] + ",1)",
                               backgroundColor: "rgba(" + this.m_colors[i] + ",1)",
                               hoverBackgroundColor: "rgba(" + this.m_colors[i] + ",1)",
                               fill: true
                              });
    }

    this.chart = new Chart(this.el.nativeElement.children[0], line)
  }       

  private _constructChart() {
    return {
      type: 'bubble',
      data: {
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
            ticks: {
              suggestedMax: this.m_xMax,
              suggestedMin: this.m_xMin
            },
            gridLines: {
              display: false
            }
          }]
        }
      }
    };
  }
}