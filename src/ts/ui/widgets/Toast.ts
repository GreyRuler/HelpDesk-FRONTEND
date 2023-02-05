export default class Toast {
	public element: HTMLElement;

	constructor(element: HTMLElement) {
		this.element = element;
	}

	static get markup() {
		return `
		<div class="toast-container top-0 start-50 translate-middle-x">
			<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
				<div class="toast-body">
					Вы уверены, что хотите удалить тикет? Это действие не обратимо.
					<div class="mt-2 pt-2 border-top">
						<button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Отмена</button>
						<button id="btn-ok" type="button" class="btn btn-primary btn-sm">Ok</button>
					</div>
				</div>
			</div>
		</div>`;
	}

	static get btnOkSelector() {
		return '#btn-ok';
	}

	static get toastSelector() {
		return '.toast';
	}

	bindToDOM() {
		this.element.innerHTML += Toast.markup;
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
