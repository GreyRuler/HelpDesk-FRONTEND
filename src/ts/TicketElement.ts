export default class TicketElement {
	private ticket: HTMLElement;

	constructor(ticket: HTMLElement) {
		this.ticket = ticket;
	}

	static get markup() {
		return `
		<input class="status" type="checkbox">
		<div class="shortDescription__ticket"></div>
		<div class="longDescription__ticket"></div>
		<div class="date__ticket"></div>
		<button class="btn btn-outline-secondary edit" data-id="">
			<div class="svg-icon svg-edit-icon"></div>
		</button>
		<button class="btn btn-outline-secondary remove" data-id="">
			<div class="svg-icon svg-cancel-icon"></div>
		</button>
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

	bindToDOM(
		shortDescription: string, longDescription: string, created: string, id: number, status: boolean
	) {
		this.ticket.innerHTML = TicketElement.markup;
		this.ticket.classList.add(
			'd-flex', 'ticket', 'justify-content-center', 'align-items-center', 'p-1'
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

		editBtnEl.addEventListener('click', this.onEditTicket);
		removeBtnEl.addEventListener('click', this.onRemoveTicket);
	}

	onEditTicket() {

	}

	onRemoveTicket() {

	}
}
