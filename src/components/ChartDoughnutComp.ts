import { Component, ElementRef, Input, OnDestroy, OnInit, OnChanges} from '@angular/core';

declare var Chart: any;


@Component({
  selector: 'doughnut-chart',
  template: `<canvas width="400" height="250"></canvas>`
})

export class ChartDoughnutComp implements OnChanges, OnInit, OnDestroy {

  @Input() dataLabels: string[];
  @Input() datas: number[];
  @Input() colors: string[];
  @Input() half: boolean;

  private el: ElementRef;
  private ctx: any;
  private chart: any;

  private m_colors: string[];

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

    if (this.colors)
      this.m_colors = this.colors;

    let line = this._constructChart();

    line.data.datasets.push({data: this.datas,
                             backgroundColor: this.m_colors,
                             hoverBackgroundColor: this.m_colors,
                             hoverBorderColor: this.m_colors
    });

    line.data.labels = this.dataLabels;

    if(this.half)
    {
      line.options.circumference = Math.PI;
      line.options.rotation = -1 * Math.PI;
    }

    this.chart = new Chart(this.el.nativeElement.children[0], line)
  }

  private _constructChart() {
    return {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: []
      },
      options: {
        circumference: 2 * Math.PI,
        rotation: -0.5 * Math.PI
      }
    };
  }
}