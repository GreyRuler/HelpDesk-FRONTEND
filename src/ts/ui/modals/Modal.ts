import bootstrap from 'bootstrap';

export default class Modal	{
	private modal: HTMLElement;

	constructor(modal: HTMLElement) {
		this.modal = modal;
	}

	static get modalSelector() {
		return '.modal';
	}

	static get formSelector() {
		return 'form';
	}

	static get titleSelector() {
		return '#modalTitle';
	}

	static get contentSelector() {
		return '#content__input';
	}

	static get descriptionSelector() {
		return '#description__input';
	}

	open() {
		const modal = new bootstrap.Modal(
			this.modal.querySelector(Modal.modalSelector) as HTMLElement
		);
		modal.show();
	}

	close() {
		const modal = new bootstrap.Modal(
			this.modal.querySelector(Modal.modalSelector) as HTMLElement
		);
		modal.hide();
	}

	changeValueContent(value: string) {
		const contentEl = this.modal.querySelector(Modal.contentSelector) as HTMLInputElement;
		contentEl.value = value;
	}

	changeValueDescription(value: string) {
		const descriptionEl = this.modal.querySelector(Modal.descriptionSelector) as HTMLInputElement;
		descriptionEl.value = value;
	}
}
