import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeteorServer } from '@shared/data-service/meteor';
import { DataService } from '@shared/data-service/data-service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
// const Sync = require('sync');
const key = makeStateKey('server_data');

@Injectable()
export class ServerDataService extends DataService {
    constructor(
      private transferState: TransferState,
    ) {
        super();
    }

    call(...args) {
      const methodName = args[0];
      const methodArgs = args.slice(1, args.length);
      console.log(methodName, methodArgs);
          let done: boolean = false;
          let data: any;

          require('sync')(function () {
              data = MeteorServer.call.sync(methodName, methodArgs);

          });
          console.log('Data..: ', data);
        //     , (err, res) => {
        //       if (err) {
        //           console.log(err);
        //           done = true;
        //       }

        //       data = res;
        //       console.log('data recieved');
        //       done = true;
        //   });
        //   runInSync.loopWhile(function() {return !done; });
          this.transferState.set(key, data);
          return Observable.of(data);
  }


}
