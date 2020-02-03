import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BankingStore } from '../store/appReducer';

export class DepositBalance extends React.Component<any, any> {
    public props: DepositPropTypes;
    private withdrawAmount: HTMLInputElement;

    constructor(props: any) {
        super(props);
        this.state = {
            visible: false
        };
        this.saveChange = this.saveChange.bind(this);
        this.close = this.close.bind(this);
    }

    saveChange = () => {
        const amount = parseFloat(this.withdrawAmount.value);
        this.setState({
            visible: false
        });
        this.props.onClose();
    }

    close = () => {
        this.setState({
            visible: false
        });
        this.props.onClose();
    }

    shouldComponentUpdate(nextProps: Readonly<DepositPropTypes>, nextState): boolean {
        if (nextProps.visible && !this.state.visible) {
            this.setState({
                visible: nextProps.visible
            });
            return true;
        }
        return true;
    }

    render() {
        return (
            <Modal show={this.state.visible} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Deposit money</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Enter Amount</label>
                    <input ref={node => {
                        this.withdrawAmount = node;
                    }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.close}>
                        Cancel
                        </Button>
                    <Button variant="primary" onClick={this.saveChange}>
                        Deposit
                        </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

interface DepositPropTypes {
    visible: boolean;
    accountNumber: string;
    onClose: () => void;
    Deposit?: (accountNumber: string, amount: number) => {};
};
