import AsyncForm from './AsyncForm';
import Ticket from '../../api/Ticket';
import { Data } from '../../types/Data';
// eslint-disable-next-line import/no-cycle
import App from '../../App';

export default class EditTicketForm extends AsyncForm {
	// eslint-disable-next-line class-methods-use-this
	onSubmit(options: Data) {
		Ticket.update(options, () => {
			const modal = App.modals.createTicket;
			modal.close();
		});
	}
}
