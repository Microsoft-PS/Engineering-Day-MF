import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IFixedDepositState } from 'src/store/state';

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

    closeAccount() {
        this.onClose.emit(this.account.number);
    }
}