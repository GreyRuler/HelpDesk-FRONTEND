/**
 * Класс App управляет всем приложением
 * */
import TicketsPage from './TicketsPage';
import Modal from './ui/modals/Modal';
import CreateTicketForm from './ui/forms/CreateTicketForm';
import EditTicketForm from './ui/forms/EditTicketForm';

export default class App {
	private static app: HTMLElement;

	private static page: TicketsPage;

	static modals: any;

	private static forms: any;

	static init() {
		this.app = document.querySelector('#app') as HTMLElement;

		this.initPages();
		this.initForms();
		this.initModals();
	}

	static initPages() {
		this.page = new TicketsPage(this.app);
		this.page.bindToDOM();
	}

	static initModals() {
		this.modals = {
			createTicket: new Modal(
				document.querySelector('#modal-create-ticket') as HTMLElement
			),
			editTicket: new Modal(
				document.querySelector('#modal-edit-ticket') as HTMLElement
			)
		};
	}

	static initForms() {
		this.forms = {
			createTicket: new CreateTicketForm(
				document.querySelector('#form-create-ticket') as HTMLElement
			),
			editTicket: new EditTicketForm(
				document.querySelector('#form-edit-ticket') as HTMLElement
			)
		};
	}
}
