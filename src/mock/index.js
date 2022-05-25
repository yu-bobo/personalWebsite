import Mock from 'mockjs'
import hometown from './hometown.json'
Mock.mock('/mock/cityinfo', 'get', {
    // 模拟返回一个状态码 200表示成功
    code: 200,
    // 模拟返回一个数据,就是我们本地的banner.json 取名为bannerList
    data: hometown
})