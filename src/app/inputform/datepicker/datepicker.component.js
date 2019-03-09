import { LitElement, html } from '@polymer/lit-element';

import '@vaadin/vaadin-date-picker';
import './datepicker.style.js';

class DatePicker extends LitElement{
    static get is(){
        return 'date-picker';
    }

    constructor(){
        super();
        this.label = "";
        this.value = "";
    }

    static get properties(){
        return {
            label: {
                type: String
            },
            value: {
                type: String
            }
        }
    }

    render(){
        return html`
            <vaadin-date-picker
            label="${this.label}"
            value="${this.value}"
            theme="custom-datepicker"
            @change="${e => {
                return this.value = e.target.value;
            }}">
            </vaadin-date-picker>
        `;
    }

    updated(){

    }
}

customElements.define(DatePicker.is, DatePicker);