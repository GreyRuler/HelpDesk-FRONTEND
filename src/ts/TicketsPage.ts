import Ticket from './api/Ticket';
import TicketElement from './TicketElement';
import { ITicket } from './types/ITicket';

export default class TicketsPage {
	private app: HTMLElement;

	constructor(app: HTMLElement) {
		this.app = app;
	}

	static get markup() {
		return `
		<button class="btn btn-outline-secondary mb-2"
				data-bs-toggle="modal" data-bs-target="#modal-create-ticket">
				Добавить тикет
		</button>
		<div id="tickets"></div>
		`;
	}

	static get ticketsSelector() {
		return '#tickets';
	}

	bindToDOM() {
		this.app.innerHTML += TicketsPage.markup;

		this.renderTickets();
	}

	renderTickets() {
		const tickets = this.app.querySelector(TicketsPage.ticketsSelector) as HTMLElement;
		tickets.innerHTML = '';
		Ticket.list({}, (data) => {
			data.forEach((item: ITicket) => {
				const ticketEl = document.createElement('div');
				const ticket = new TicketElement(ticketEl);
				ticket.bindToDOM(
					item.shortDescription,
					item.longDescription,
					item.created,
					item.id,
					item.status
				);
				tickets.append(ticketEl);
			});
		});
	}
}
