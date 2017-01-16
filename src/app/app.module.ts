import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// import '../../node_modules/chart.js/dist/Chart.bundle.min.js'; // and
// import { ChartsModule } from 'ng2-charts/components/charts/charts';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';

import {ChartComp} from '../components/ChartComp';
import {ChartPieComp} from '../components/ChartPieComp';
import {ChartDoughnutComp} from '../components/ChartDoughnutComp';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    ChartComp,
    ChartPieComp,
    ChartDoughnutComp
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
    Page4
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
