import { Injectable } from '@angular/core';
import { MongoObservable } from 'meteor-rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
    UploadFS: any;
    ImagesStore: any;
    Leads: MongoObservable.Collection<LEAD>;
    Quotes: MongoObservable.Collection<QUOTE>;
    Images: MongoObservable.Collection<IMAGE>;
    Categories: Mongo.Collection<CATEGORY>;
    Services: Mongo.Collection<SERVICE>;
    constructor() {
    }
    call(...args): Observable<any> { return Observable.empty(); }
}
