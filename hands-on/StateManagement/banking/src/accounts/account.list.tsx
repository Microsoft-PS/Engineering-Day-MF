import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { IBankingState, IAccountState } from '../store/state';
import Modal from 'react-bootstrap/Modal';
import { WithdrawBalance } from './withdraw';
import { DepositBalance } from './deposit';

export class AccountList extends React.Component<any, any> {
	public props: AccountListPropTypes;
	private withdrawalInProgress: { [key: string]: boolean } = {};
	private depositInProgress: { [key: string]: boolean } = {};

	constructor(props: any) {
		super(props);
		this.startWithdraw = this.startWithdraw.bind(this);
		this.withdrawalClosed = this.withdrawalClosed.bind(this);

		this.startDeposit = this.startDeposit.bind(this);
		this.depositClosed = this.depositClosed.bind(this);

		this.state = {
			withdrawalInProgress: {},
			depositInProgress: {}
		};
	}

	startWithdraw(accountNumber: string) {
		this.withdrawalInProgress[accountNumber] = true;
		this.setState({
			withdrawalInProgress: this.withdrawalInProgress
		});
	}

	withdrawalClosed(accountNumber: string) {
		this.withdrawalInProgress[accountNumber] = false;
		this.setState({
			withdrawalInProgress: this.withdrawalInProgress
		});
	}

	startDeposit(accountNumber: string) {
		this.depositInProgress[accountNumber] = true;
		this.setState({
			depositInProgress: this.depositInProgress
		});
	}

	depositClosed(accountNumber: string) {
		this.depositInProgress[accountNumber] = false;
		this.setState({
			depositInProgress: this.depositInProgress
		});
	}

	render() {
		return (
			<div>
				<Container className="p-3">
					<Jumbotron>
						<h1 className="header">Account Summary</h1>
						{this.props.accounts.map((account) => {
							return (
								<div key={account.number}>
									<Card style={{ width: '30rem' }}>
										<Card.Body>
											<Card.Title>Account Number: {account.number}</Card.Title>
											<Card.Subtitle>Balance: Rs. {account.balance}</Card.Subtitle>
											<Card.Text>Second Holder: {account.secondaryHolder}</Card.Text>
											<Button variant="primary" onClick={() => this.startDeposit(account.number)}>
												Deposit
											</Button>
											<Button
												variant="secondary"
												onClick={() => {
													this.startWithdraw(account.number);
												}}
											>
												Withdraw
											</Button>
										</Card.Body>
									</Card>
									<WithdrawBalance
										accountNumber={account.number}
										visible={this.state.withdrawalInProgress[account.number]}
										onClose={() => {
											this.withdrawalClosed(account.number);
										}}
									/>

									<DepositBalance
										accountNumber={account.number}
										visible={this.state.depositInProgress[account.number]}
										onClose={() => {
											this.depositClosed(account.number);
										}}
									/>
								</div>
							);
						})}
					</Jumbotron>
				</Container>
			</div>
		);
	}
}

interface AccountListPropTypes {
	accounts: IAccountState[];
	show?: boolean;
}
