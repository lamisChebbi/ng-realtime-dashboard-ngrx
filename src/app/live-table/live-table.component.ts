import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectTransactionsStream } from '../store/selectors/transaction.selector';
import { IAppState } from '../store/state/app.state';
import { GetTransactions } from '../store/actions/cash.action';
import { ITransaction } from '../models/Transaction.model';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-live-table',
  templateUrl: './live-table.component.html',
  styleUrls: ['./live-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveTableComponent implements OnInit, OnDestroy {


  trade$ = this.store.pipe(select(selectTransactionsStream));
  constructor(private service: DataService, private store: Store<IAppState>) {
      this.store.dispatch(new GetTransactions({}));
  }

  updateStatus(trade) {
    this.service.sendMessage(trade);
    console.log(trade);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.service.closeConnection();
  }
}
