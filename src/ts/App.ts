/**
 * Класс App управляет всем приложением
 * */
// eslint-disable-next-line import/no-cycle
import TicketsPage from './TicketsPage';
import Modal from './ui/modals/Modal';
// eslint-disable-next-line import/no-cycle
import CreateTicketForm from './ui/forms/CreateTicketForm';
// eslint-disable-next-line import/no-cycle
import EditTicketForm from './ui/forms/EditTicketForm';
import Toast from './ui/widgets/Toast';

export default class App {
	private static app: HTMLElement;

	public static page: TicketsPage;

	static modals: {
		createTicket: Modal,
		editTicket: Modal,
	};

	private static forms: {
		createTicket: CreateTicketForm,
		editTicket: EditTicketForm,
	};

	public static widgets: { toast: Toast };

	static init() {
		this.app = document.querySelector('#app') as HTMLElement;

		this.initPages();
		this.initForms();
		this.initModals();
		this.initWidgets();

		this.widgets.toast.bindToDOM();
		this.page.bindToDOM();
	}

	static initPages() {
		this.page = new TicketsPage(this.app);
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

	static initWidgets() {
		this.widgets = {
			toast: new Toast(this.app)
		};
	}
}
