import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("dialog-modal")
export class DialogModal extends LitElement {

    @property({ type: String })
    public header: string;

    @property({ type: String })
    public body: string;

    @state()
    private _open: boolean;

    constructor() {
        super();
        this._open = false;

        this.header = "";
        this.body = "";
    }

    open() {
        this._open = true;
    }

    close() {
        this._open = false;
    }

    // Función de renderizado
    render() {
        if (this._open) {
            return html`
                <div class="backdrop">
                    <div class="dialog-modal-content">
                        <div class="dialog-modal-header">
                            <h2>${this.header}</h2>
                        </div>
                        <div class="dialog-modal-body">
                            ${this.body}
                        </div>
                        <div class="dialog-modal-footer">
                            <button @click=${this.close}>Accept</button>
                            <!-- <button>Cancel</button> -->
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // Define scoped styles para el component en CSS plano
    static styles = css`
        .backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .dialog-modal-content {
            min-width: 30rem;
            border: 1px solid red;
            padding: 1rem;
            display: grid;
            grid-template-rows: 3rem auto 2rem;
            gap: 1rem 0;
            border-radius: 5px;
            background-color: white;
        }

        .dialog-modal-footer {
            display: flex;
            justify-content: end;
            align-items: flex-end;
            gap: 0.5rem;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
      "dialog-modal": DialogModal;
    }
}