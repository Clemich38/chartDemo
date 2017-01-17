import { Component, ElementRef, Input, OnDestroy, OnInit, OnChanges} from '@angular/core';

declare var Chart: any;


@Component({
  selector: 'bar-chart',
  template: `<canvas width="400" height="250"></canvas>`
})

export class ChartBarComp implements OnChanges, OnInit, OnDestroy {

  @Input() labels: string[];
  @Input() data: number[];
  @Input() colors: string[];
  @Input() horizontal: boolean;

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
    if (this.data && this.labels) {
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
      this.colorTab = this.colors;

    let line = this._constructChart(this.data);
    line.data.datasets[0].data = this.data;
    line.data.datasets[0].backgroundColor = this.colorTab;
    line.data.datasets[0].borderColor = this.colorTab;
    line.data.datasets[0].hoverBackgroundColor = this.colorTab;
    line.data.datasets[0].hoverBorderColor = this.colorTab;
    line.data.labels = this.labels;

    this.chart = new Chart(this.el.nativeElement.children[0], line)
  }

  private _constructChart(datas: number[]) {
    let type = this.horizontal? 'horizontalBar' : 'bar';
    return {
      type: type,
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: [],
          borderColor: [],
          hoverBackgroundColor: [],
          hoverBorderColor: []
        }]
      },
    };
  }
}