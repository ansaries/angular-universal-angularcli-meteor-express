import { Injectable } from '@angular/core';
import { DataService } from '@shared/data-service/data-service';
import { Observable } from 'rxjs';
import { MeteorObservable, MongoObservable } from 'meteor-rxjs';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const key = makeStateKey('server_data');

@Injectable()
export class BrowserDataService extends DataService {
  UploadFS: any;
  ImagesStore: any;
  Leads: MongoObservable.Collection<LEAD>;
  Quotes: MongoObservable.Collection<QUOTE>;
  Images: MongoObservable.Collection<IMAGE>;
  Categories: Mongo.Collection<CATEGORY>;
  Services: Mongo.Collection<SERVICE>;
  constructor(
    private transferState: TransferState
  ) {
    super();

    this.Services = require('../../../@foc/api/collections').Services;
    this.Categories = require('../../../@foc/api/collections').Categories;
    this.Leads = require('../../../@foc/api/collections').Leads;
    this.Quotes = require('../../../@foc/api/collections').Quotes;
    this.Images = require('../../../@foc/api/collections').Images;
    this.ImagesStore = require('../../../@foc/api/collections').ImagesStore;
  }

  call(...args): Observable<any> {
    const methodName = args[0];
    const methodArgs = args.slice(1, args.length);
    if (this.transferState.hasKey(key)) {
        const data = this.transferState.get(key, null);
        this.transferState.remove(key);
        return Observable.of(data);
    }
    return MeteorObservable.call(methodName, ...methodArgs);
  }
}
