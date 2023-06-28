import { css } from "lit";

export default () => {
    return css`
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