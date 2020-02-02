import { AppStore } from '../store/store';
import { FormsModule } from '@angular/forms';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FixedDepositListComponent } from '../app/fixedDeposit/fixed-deposit-list';
import { FixedDepositThumbnailComponent } from '../app/fixedDeposit/fixed-deposit-thumbnail';

@NgModule({
    declarations: [
        FixedDepositThumbnailComponent,
        FixedDepositListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [!window["banking-portal-context"] ? FixedDepositListComponent : []],
    entryComponents: [ FixedDepositListComponent ]
})
export class AppModule {
    constructor(private injector: Injector) {
        this.bootstrap();
    }

    bootstrap() {
        const FixedDepositElement = createCustomElement(FixedDepositListComponent, { injector: this.injector });
        customElements.define('fixed-deposits', FixedDepositElement);
    }
}
