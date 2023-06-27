import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {

    // Define scoped styles para el component en CSS plano
    static styles = css`
        :host {
            color: green;

        }
        :host button {
            padding: 0.5rem;
        }
    `;

    // Propiedades reactivas
    @property()
    name?: string;

    // Renderizado del componente
    render() {
        return html`
            <p>Hello, ${this.name}!</p>
            <button @click=${this.sayHello}>Press me</button>
        `;
    }

    // Funciones del componente
    sayHello() {
        alert(`Hello, my friend ${this.name}`)
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "simple-greeting": SimpleGreeting;
    }
}