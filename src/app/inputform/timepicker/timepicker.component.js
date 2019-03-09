import { LitElement, html } from '@polymer/lit-element';

import '@vaadin/vaadin-time-picker';
import './timepicker.style.js';

class TimePicker extends LitElement{
    static get is(){
        return 'time-picker';
    }
    constructor(){
        super();
        this.label = '';
        this.value = '';
    }
    static get properties(){
        return {
            label: {
                type: String
            },
            value: {
                type: String
            }
        };
    }
   render(){
    return html`
        <vaadin-time-picker 
        label="${this.label}"
        value="${this.value}"
        theme="custom-timepicker"
        @value-changed="${e => {
            return this.value = e.target.value;
        }}">
    </vaadin-time-picker>
    `;
   }
   // called when element is generated/updated
    updated(){
    }

}

customElements.define(TimePicker.is, TimePicker);
