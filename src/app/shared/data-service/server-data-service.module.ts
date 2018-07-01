import { NgModule } from '@angular/core';
import { ServerDataService } from './server-data-service';
import { DataService } from '@shared/data-service/data-service';
import { TransferState } from '@angular/platform-browser';


@NgModule({
  providers: [
    { provide: DataService, useClass: ServerDataService, deps: [TransferState] }
  ]
})
export class ServerDataServiceModule {

}
