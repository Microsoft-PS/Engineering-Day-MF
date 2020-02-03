import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { Withdraw } from '../store/withdraw.action';

class WithdrawModal extends React.Component<any, any> {
    public props: WithdrawPropTypes;
    private withdrawAmount: HTMLInputElement;

    constructor(props: WithdrawPropTypes) {
        super(props);
        this.state = {
            visible: false
        };
        this.saveChange = this.saveChange.bind(this);
        this.close = this.close.bind(this);
    }

    saveChange = () => {
        const amount = parseFloat(this.withdrawAmount.value);
        this.props.Withdraw(this.props.accountNumber, amount);
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

    shouldComponentUpdate(nextProps: Readonly<WithdrawPropTypes>, nextState): boolean {
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
                    <Modal.Title>Withdraw money</Modal.Title>
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
                        Withdraw
                        </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const MapStateToProps = null;
const MapDispatchToProps = {
    Withdraw
}

interface WithdrawPropTypes {
    visible: boolean;
    accountNumber: string;
    onClose: () => {}
    Withdraw?: (accountNumber: string, amount: number) => {};
};

export const WithdrawBalance = connect(
    MapStateToProps,
    MapDispatchToProps
)(WithdrawModal);