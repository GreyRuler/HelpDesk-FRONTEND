export default class Modal	{
	public element: HTMLElement;

	constructor(modal: HTMLElement) {
		this.element = modal;
	}

	static get inputIdSelector() {
		return 'input[name="id"]';
	}

	static get editShortDescriptionSelector() {
		return '#short-description__edit';
	}

	static get editLongDescriptionSelector() {
		return '#long-description__edit';
	}

	static get createShortDescriptionSelector() {
		return '#short-description__create';
	}

	static get createLongDescriptionSelector() {
		return '#long-description__create';
	}

	changeValueShortDescriptionEl(value: string) {
		const shortDescriptionEl = this.element
			.querySelector(Modal.editShortDescriptionSelector) as HTMLInputElement;
		shortDescriptionEl.value = value;
	}

	changeValueLongDescription(value: string) {
		const longDescriptionEl = this.element
			.querySelector(Modal.editLongDescriptionSelector) as HTMLInputElement;
		longDescriptionEl.value = value;
	}

	clear() {
		const shortDescriptionEl = this.element
			.querySelector(Modal.createShortDescriptionSelector) as HTMLInputElement;
		const longDescriptionEl = this.element
			.querySelector(Modal.createLongDescriptionSelector) as HTMLInputElement;
		shortDescriptionEl.value = '';
		longDescriptionEl.value = '';
	}
}
