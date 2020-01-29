import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FixedDepositListComponent } from '../app/fixedDeposit/fixed-deposit-list';
import { FixedDepositThumbnailComponent } from '../app/fixedDeposit/fixed-deposit-thumbnail';

@NgModule({
    declarations: [
        FixedDepositThumbnailComponent,
        FixedDepositListComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [FixedDepositListComponent]
})
export class AppModule { }
