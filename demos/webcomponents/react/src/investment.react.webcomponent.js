import InvestmentReactComponent from './investment.component';
import React from 'react';
import ReactDOM from 'react-dom';
class InvestmentComponentWrapper extends HTMLElement {
    connectedCallback() {
        const containerElement = document.createElement('div');
        this.appendChild(containerElement);
        ReactDOM.render( <InvestmentReactComponent> </InvestmentReactComponent>, containerElement);
        }
    }
export default customElements.define('react-investment', InvestmentComponentWrapper);