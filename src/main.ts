import { DialogModal } from "./components/DialogModal/dialog-modal";

// Modal
const dialogModal = document.querySelector("dialog-modal") as DialogModal;

// Botón
const openModalButton = document.getElementById("open-modal-btn");
openModalButton!.addEventListener("click", () => dialogModal.open());