import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import dialogModalStyles from "./dialog-modal-styles";

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
    
    static get styles() {
        return dialogModalStyles();
    }

}

declare global {
    interface HTMLElementTagNameMap {
      "dialog-modal": DialogModal;
    }
}