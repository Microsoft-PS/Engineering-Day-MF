import { IFixedDepositState } from 'src/store/state';
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'fixed-deposit-thumbnail',
    templateUrl: './fixed-deposit-thumbnail.html',
    styles: [`
        .thumbnail {
        min-height: 225px;
        }
        .pad-left {
        margin-left: 10px;
        }
        .well div {
            color: #bbb;
        }
    `]
})
export class FixedDepositThumbnailComponent {
    @Input() account: IFixedDepositState;
    @Output() onClose = new EventEmitter();

    isAccountBeingClosed: boolean = false;
    linkedSavingsAccount: string = "";

    startAccountClose() {
        this.isAccountBeingClosed  = true;
    }

    closeAccount() {
        this.onClose.emit({
            fdAccount: this.account.number,
            savingsAccount: this.linkedSavingsAccount
        });
    }
}