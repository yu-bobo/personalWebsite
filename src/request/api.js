// const path = require('path');
import serive from './index'
// 获取个人履历信息
export const getResumeInfo = (url, data) => {
	return serive.get('/resume/getResumeInfo')
}
// 获取家乡简介
export const getCityInfo = (url, data) => {
	// return serive.get('/mock/cityinfo');
	return serive.get('/hometown/getHometownInfo')
}
// 获取学校简介
export const getSchoolInfo = (url, data) => {
	// return serive.get('/mock/cityinfo');
	return serive.get('/school/getSchoolInfo')
}
