import { Component, ViewChild } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-angular';
  message = 'Hello';
  barData$: Observable<any>;
  @ViewChild('chart', {static: false}) chart: UIChart;

  constructor(private service: DataService) {
    // let tempData: any;
    // this.barData$ = of(this.barData);
    // this.service.wsSubject().subscribe(msg => {
    //   console.log('I received this message: ' + msg);
      // tempData = this.barData$;
      // tempData['value'].datasets[0].data = tempData['value'].datasets[0].data.filter(x=>x>15).map(
      //   x => x * 2
      // );
      // this.barData$ = tempData;
      // this.chart.reinit();
    // });
  }

  sendToServer($event) {
    // this.subject.next(this.message);
    this.service.connect().error({code: 4000, reason: 'I think our app just broke!'});
    // this.service.wsSubject().complete();
    // this.service.wsSubject().next('Hi');
    // 1st way
    // const subject$ = webSocket( 'ws://localhost:8081');
    // 2nd way
    // const subject$ = webSocket({
    //        url: 'ws://localhost:8081',
    //        // Apply any transformation of your choice.
    //       deserializer: (e) => JSON.parse(e.data),
    //       // Apply any transformation of your choice.
    //       serializer: (value) => JSON.stringify(value),
    //       openObserver: {
    //         next: () => {
    //           console.log('Connetion established');
    //         }
    //        },
    //       closeObserver: {
    //         next() {
    //             const customError = { code: 4040, reason: 'Custom reason' };
    //             console.log(`code: ${customError.code}, reason: ${customError.reason}`);
    //         },
    //       },
    //    });

    // }
  }
  unsubscribe($event) {
    this.service.connect().unsubscribe();
  }

  subscribe($event) {
    this.service.connect().subscribe();
  }
}
