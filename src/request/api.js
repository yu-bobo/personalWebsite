// const path = require('path');
import serive from "./index";
export const getCityIndfo = (url, data) => {
    return serive.get('/hometown.json')
}