import {service} from './request.js';

export function getHomeMultidata() {
	return service({
		url:'/home/multidata'
	})
}