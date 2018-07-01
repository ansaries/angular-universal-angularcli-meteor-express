import { Component, OnInit, Inject } from '@angular/core';

import { AppStorage } from '@shared/for-storage/universal.inject';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { DataService } from '@shared/data-service/data-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  services: Observable<any>;
  constructor(private http: TransferHttpService,
    @Inject(AppStorage) private appStorage: Storage,
    private _dataService: DataService,
  ) {
     this.services = this._dataService.call(
       'services',
       {filter: {}, fields: {name: 1}, sort: {name: 1}});
  }

  ngOnInit(): void {
    this.appStorage.setItem('test', 'test2');
    const resultCookie = this.appStorage.getItem('test');
    const t = window;
    const t1 = document;
  }
}
