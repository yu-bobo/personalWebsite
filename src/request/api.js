// const path = require('path');
import serive from './index';
export const getCityInfo = (url, data) => {
	return serive.get('/mock/cityinfo');
};
