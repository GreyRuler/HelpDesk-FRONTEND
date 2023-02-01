import { Data } from '../../types/Data';

/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
export default class AsyncForm {
	private element: HTMLElement;

	/**
	 * Если переданный элемент не существует,
	 * необходимо выкинуть ошибку.
	 * Сохраняет переданный элемент и регистрирует события
	 * через registerEvents()
	 * */
	constructor(element: HTMLElement) {
		// eslint-disable-next-line @typescript-eslint/no-throw-literal
		if (element === undefined) throw 'Передан пустой элемент в конструктор';
		this.element = element;
		this.registerEvents();
	}

	/**
	 * Необходимо запретить отправку формы и в момент отправки
	 * вызывает метод submit()
	 * */
	registerEvents() {
		this.element.addEventListener('submit', (e) => {
			e.preventDefault();
			this.submit();
		});
	}

	/**
	 * Преобразует данные формы в объект вида
	 * {
	 *  'название поля формы 1': 'значение поля формы 1',
	 *  'название поля формы 2': 'значение поля формы 2'
	 * }
	 * */
	getData() {
		const allInput = this.element.querySelectorAll('input');
		return Array.from(allInput).reduce((value, input) => {
			// @ts-ignore
			value[input.name] = input.value;
			return value;
		}, {});
	}

	// eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars
	onSubmit(options: Data) {}

	/**
	 * Вызывает метод onSubmit и передаёт туда
	 * данные, полученные из метода getData()
	 * */
	submit() {
		this.onSubmit(this.getData());
	}
}
