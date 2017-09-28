import React, { Component } from 'react';

export default class PaymentInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	saveInfo = () => {
		const c1 = this.refs.c1.value,
					c2 = this.refs.c2.value,
					c3 = this.refs.c3.value,
					c4 = this.refs.c4.value,
					ex1 = this.refs.ex1.value,
					ex2 = this.refs.ex2.value,
					sec = this.refs.sec.value,
					num = c1 + c2 + c3 + c4,
					exp = ex1 + "/" + ex2;
		this.props.savePinfo(num, exp, sec);
	}

	render = () => {
		return (
			<section className={this.props.classes}>
				<button onClick={this.props.displayPaymentInfo}>Cancel</button>
				<button onClick={this.saveInfo}>Save</button>
				<div>
					<h2>Payment Info</h2>
					<div className="card-no">
						<input ref="c1" placeholder="xxxx"/>
						<input ref="c2" placeholder="xxxx"/>
						<input ref="c3" placeholder="xxxx"/>
						<input ref="c4" placeholder="xxxx"/>
					</div>
					<div className="card-ex">
						<div className="expire">
							<input ref="ex1" placeholder="MM" />/
							<input ref="ex2" placeholder="YYYY" />
						</div>
						<div className="cvv">
							<input ref="sec" placeholder="CVV" />
						</div>
					</div>
				</div>
			</section>
		);
	}
}