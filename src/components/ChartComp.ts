import { Component, ElementRef, Input, OnDestroy, OnInit, OnChanges} from '@angular/core';

declare var Chart: any;


@Component({
  selector: 'line-chart',
  template: `<canvas width="400" height="250"></canvas>`
})

export class ChartComp implements OnChanges, OnInit, OnDestroy {

  @Input() xLabels: string[];
  @Input() data: number[];
  @Input() title: string;

  private el: ElementRef;
  private ctx: any;
  private chart: any;

  public constructor(el: ElementRef) {
    this.el = el;
  }

  public ngOnInit() {
    this.ctx = this.el.nativeElement.children[0];
  }

  public ngOnChanges() {
    if (this.data && this.xLabels) {
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

    let line = this._constructLineChart(this.data);
    line.data.datasets[0].data = this.data;
    line.data.labels = this.xLabels;

    this.chart = new Chart(this.el.nativeElement.children[0], line)
  }

  private _constructLineChart(datas: number[]) {
    return {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: this.title,
          data: [],
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: '#e3f2fd',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: Math.max.apply(Math, datas) + 1,
              min: Math.min.apply(Math, datas)
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