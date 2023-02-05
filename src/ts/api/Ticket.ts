import createRequest from './createRequest';
import { Callback } from '../types/Callback';
import { Data } from '../types/Data';

export default class Ticket {
	static URL = 'http://localhost:7070/';

	static list(data: Data, callback: Callback) {
		createRequest({
			url: `${this.URL}?method=allTickets`,
			method: 'GET',
			responseType: 'json',
			data,
			callback: (response) => {
				if (response.error) {
					console.log(response.error);
					return;
				}
				if (response && response.success) {
					callback(response.data);
				}
			}
		});
	}

	static create(data: Data, callback: Callback) {
		createRequest({
			url: `${this.URL}?method=createTicket`,
			method: 'PUT',
			responseType: 'json',
			data,
			callback: (response) => {
				if (response.error) {
					console.log(response.error);
					return;
				}
				if (response && response.success) {
					callback(response.data);
				}
			}
		});
	}

	static update(data: Data, callback: Callback) {
		createRequest({
			url: `${this.URL}?method=updateTicketById`,
			method: 'PUT',
			responseType: 'json',
			data,
			callback: (response) => {
				if (response.error) {
					console.log(response.error);
					return;
				}
				if (response && response.success) {
					callback(response.data);
				}
			}
		});
	}

	static show(data: Data, callback: Callback) {
		createRequest({
			url: `${this.URL}?method=ticketById`,
			method: 'PUT',
			responseType: 'json',
			data,
			callback: (response) => {
				if (response.error) {
					console.log(response.error);
					return;
				}
				if (response && response.success) {
					callback(response.data);
				}
			}
		});
	}

	static remove(data: Data, callback: Callback) {
		createRequest({
			url: `${this.URL}?method=deleteTicketById`,
			method: 'DELETE',
			responseType: 'json',
			data,
			callback: (response) => {
				if (response.error) {
					console.log(response.error);
					return;
				}
				if (response && response.success) {
					callback(response.data);
				}
			}
		});
	}
}
