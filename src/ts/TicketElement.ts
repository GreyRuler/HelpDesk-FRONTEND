import * as bootstrap from 'bootstrap';
import Ticket from './api/Ticket';
import App from './App';
import Modal from './ui/modals/Modal';
import Toast from './ui/widgets/Toast';

export default class TicketElement {
	private ticket: HTMLElement;

	constructor(ticket: HTMLElement) {
		this.ticket = ticket;
	}

	static get markup() {
		return `
		<div class="d-flex justify-content-start align-items-center">
			<input class="col-1 status" type="checkbox">
			<div class="col-7 shortDescription__ticket"></div>
			<div class="col-2 date__ticket"></div>
			<button class="btn btn-outline-secondary edit col-1 svg-icon svg-edit-icon" data-id=""
					data-bs-toggle="modal" data-bs-target="#modal-edit-ticket"></button>
			<button class="btn btn-outline-secondary remove col-1 svg-icon svg-cancel-icon"
					data-id=""></button>
		</div>
		<div class="d-none justify-content-between align-items-center longDescription__container">
			<div class="col-1"></div>
			<div class="col longDescription__ticket"></div>
			<div class="col-4"></div>
		</div>
		`;
	}

	static get shortDescriptionSelector() {
		return '.shortDescription__ticket';
	}

	static get longDescriptionSelector() {
		return '.longDescription__ticket';
	}

	static get dateSelector() {
		return '.date__ticket';
	}

	static get statusSelector() {
		return '.status';
	}

	static get ticketEditBtnSelector() {
		return '.btn.edit';
	}

	static get ticketRemoveBtnSelector() {
		return '.btn.remove';
	}

	static get longDescriptionContainerSelector() {
		return '.longDescription__container';
	}

	bindToDOM(
		shortDescription: string, longDescription: string, created: string, id: number, status: boolean
	) {
		this.ticket.innerHTML = TicketElement.markup;
		this.ticket.classList.add(
			'ticket',
			'p-1',
			'border',
			'border-secondary'
		);

		const statusEl = this.ticket
			.querySelector(TicketElement.statusSelector) as HTMLInputElement;
		const shortDescriptionEl = this.ticket
			.querySelector(TicketElement.shortDescriptionSelector) as HTMLElement;
		const longDescriptionEl = this.ticket
			.querySelector(TicketElement.longDescriptionSelector) as HTMLElement;
		const dateEl = this.ticket
			.querySelector(TicketElement.dateSelector) as HTMLElement;
		const editBtnEl = this.ticket
			.querySelector(TicketElement.ticketEditBtnSelector) as HTMLElement;
		const removeBtnEl = this.ticket
			.querySelector(TicketElement.ticketRemoveBtnSelector) as HTMLElement;

		editBtnEl.dataset.id = String(id);
		removeBtnEl.dataset.id = String(id);

		statusEl.checked = status;
		shortDescriptionEl.textContent = shortDescription;
		longDescriptionEl.textContent = longDescription;
		dateEl.textContent = created;

		this.ticket.addEventListener('click', this.onToggleLongDescription.bind(this), true);
		editBtnEl.addEventListener('click', this.onEditTicket.apply(
			editBtnEl, [shortDescriptionEl, longDescriptionEl]
		));
		removeBtnEl.addEventListener('click', this.onRemoveTicket);
	}

	onEditTicket(shortDescriptionEl: HTMLElement, longDescriptionEl: HTMLElement) {
		return () => {
			const modal = App.modals.editTicket;
			const inputId = modal.element.querySelector(Modal.inputIdSelector) as HTMLInputElement;
			// @ts-ignore
			inputId.value = this.dataset.id;
			modal.changeValueShortDescriptionEl(shortDescriptionEl.textContent || '');
			modal.changeValueLongDescription(longDescriptionEl.textContent || '');
		};
	}

	onRemoveTicket() {
		const toastEl = App.widgets.toast.element
			.querySelector(Toast.toastSelector) as HTMLElement;
		const toast = new bootstrap.Toast(toastEl);
		toast.show();
		App.widgets.toast.bindToCallbackForBtnOk(() => {
			toast.hide();
			// @ts-ignore
			Ticket.remove({ id: this.dataset.id as string }, () => {
				App.page.renderTickets();
			});
		});
	}

	onToggleLongDescription(event: Event) {
		const currentEl = event.target as HTMLElement;
		if (!currentEl.classList.contains('status')
			&& !currentEl.classList.contains('svg-icon')) {
			const longDescriptionContainer = this.ticket
				.querySelector(TicketElement.longDescriptionContainerSelector) as HTMLElement;
			longDescriptionContainer.classList.toggle('d-none');
			longDescriptionContainer.classList.toggle('d-flex');
		}
	}
}
