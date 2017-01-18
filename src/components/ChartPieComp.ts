import { Component, ElementRef, Input, OnDestroy, OnInit, OnChanges} from '@angular/core';

declare var Chart: any;


@Component({
  selector: 'pie-chart',
  template: `<canvas width="400" height="250"></canvas>`
})

export class ChartPieComp implements OnChanges, OnInit, OnDestroy {

  @Input() datas: number[];
  @Input() dataLabels: string[];
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

    for(let i in this.m_colors)
      this.m_colors[i] = "rgba(" + this.m_colors[i] + ",1)";

    let line = this._constructChart();

    line.data.datasets.push({data: this.datas,
                             backgroundColor: this.m_colors,
                             hoverBackgroundColor: this.m_colors,
                             hoverBorderColor: this.m_colors,
    });

    line.data.labels = this.dataLabels;

    this.chart = new Chart(this.el.nativeElement.children[0], line)
  }

  private _constructChart() {
    return {
      type: 'pie',
      data: {
        labels: [],
        datasets: []
      }
    };
  }
}