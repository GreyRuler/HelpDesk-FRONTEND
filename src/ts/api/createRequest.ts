import { Options } from '../types/Options';

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options: Options) => {
	const xhr = new XMLHttpRequest();
	xhr.responseType = options.responseType;
	xhr.addEventListener('readystatechange', () => {
		if (xhr.readyState === xhr.DONE && xhr.status === 200) {
			options.callback(xhr.response);
		}
	});
	if (['DELETE', 'PUT'].includes(options.method)) options.url += `&id=${options.data.id}`;
	if (options.method === 'GET') {
		xhr.open(options.method, options.url);
		xhr.send();
	} else {
		const formData = new FormData();
		for (const [key, value] of Object.entries(options.data)) {
			formData.append(key, value);
		}
		xhr.open(options.method, options.url);
		xhr.send(formData);
	}
};

export default createRequest;
