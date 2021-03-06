import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// import '../../node_modules/chart.js/dist/Chart.bundle.min.js'; // and
// import { ChartsModule } from 'ng2-charts/components/charts/charts';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';
import { Page5 } from '../pages/page5/page5';
import { Page6 } from '../pages/page6/page6';
import { Page7 } from '../pages/page7/page7';

import {ChartLineComp} from '../components/ChartLineComp';
import {ChartPieComp} from '../components/ChartPieComp';
import {ChartDoughnutComp} from '../components/ChartDoughnutComp';
import {ChartBarComp} from '../components/ChartBarComp';
import {ChartRadarComp} from '../components/ChartRadarComp';
import {ChartBubbleComp} from '../components/ChartBubbleComp';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    ChartLineComp,
    ChartPieComp,
    ChartDoughnutComp,
    ChartBarComp,
    ChartRadarComp,
    ChartBubbleComp
  ],
  imports: [
    // ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
