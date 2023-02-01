import { Response } from './Response';
import { Data } from './Data';

export type Options = {
	responseType: XMLHttpRequestResponseType,
	callback: (response: Response) => void,
	method: string,
	url: string,
	data: Data
};
