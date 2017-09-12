// 解析location.search 获取&后面的数据
//传一个参数，返回指定key的值 ，不传参数解析返回对象的值
//1，切去获取数据后的字符串，首先切掉'?'
// 2,通过split  & 将数据劈成 key=val这样的字符串组成的数据
// 3，然后再通过 split = 将一组组字符串劈成 key 和 val 这样的数组，储存到一个对象中
// 4，判断---若没有传参则返回这个对象，传了就返回对象中指定key的值


function getSearch(key) {
    var searchStr = location.search.slice(1);
    var searchArr = searchStr.split('&');
    var tempArr = [];
    var searchObj = {};
    for (var i = 0; i < searchArr.length; i++) {
        tempArr = searchArr[i].split('=');
        searchObj[tempArr[0]] = tempArr[1];
    }

    return key ? searchObj[key] : searchObj;

}

module.exports.getSearch = getSearch;