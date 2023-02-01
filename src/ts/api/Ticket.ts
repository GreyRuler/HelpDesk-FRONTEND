import createRequest from './createRequest';
import { Callback } from '../types/Callback';
import { Data } from '../types/Data';

/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
export default class Ticket {
	static URL = 'http://localhost:7070/';

	/**
	 * Запрашивает с сервера список данных.
	 * Это могут быть счета или доходы/расходы
	 * (в зависимости от того, что наследуется от Entity)
	 * */
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

	/**
	 * Создаёт счёт или доход/расход с помощью запроса
	 * на сервер. (в зависимости от того,
	 * что наследуется от Entity)
	 * */
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

	/**
	 * Создаёт счёт или доход/расход с помощью запроса
	 * на сервер. (в зависимости от того,
	 * что наследуется от Entity)
	 * */
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

	/**
	 * Создаёт счёт или доход/расход с помощью запроса
	 * на сервер. (в зависимости от того,
	 * что наследуется от Entity)
	 * */
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

	/**
	 * Удаляет информацию о счёте или доходе/расходе
	 * (в зависимости от того, что наследуется от Entity)
	 * */
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
