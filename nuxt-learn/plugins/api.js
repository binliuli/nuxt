let host = 'http://api.xxx.xxx';
console.log("env:",process.env)
console.log("NODE_ENV:",process.env.NODE_ENV)
console.log("GLOBALCONFIG:",process.env.GLOBALCONFIG)
let api = {
    getSolidList: host + '/getSolidList.api'
};
export default api