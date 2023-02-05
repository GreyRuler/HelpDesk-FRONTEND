export default class Toast {
	public element: HTMLElement;

	constructor(element: HTMLElement) {
		this.element = element;
	}

	static get btnOkSelector() {
		return '#btn-ok';
	}

	bindToCallbackForBtnOk(callback: () => void) {
		const btnOk = this.element.querySelector(
			Toast.btnOkSelector
		) as HTMLElement;
		const onHandle = () => {
			callback();
			btnOk.removeEventListener('click', onHandle);
		};
		this.element.addEventListener('show.bs.toast', () => {
			btnOk.removeEventListener('click', onHandle);
		});
		btnOk.addEventListener('click', onHandle);
	}
}
