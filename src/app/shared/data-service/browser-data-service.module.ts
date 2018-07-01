import { NgModule } from '@angular/core';
import { BrowserDataService } from '@shared/data-service/browser-data-service';
import { DataService } from '@shared/data-service/data-service';
import { TransferState } from '@angular/platform-browser';



@NgModule({
  providers: [
    {
      provide: DataService,
      useClass: BrowserDataService,
      deps: [
        TransferState
      ]
    }
  ]
})
export class BrowserDataServiceModule {

}
