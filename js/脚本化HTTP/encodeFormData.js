/**
 * 用于HTTP请求的编码对象
 * 编码对象的属性如果是来自HTML表单的名/值对，使用application/x-www-form-urlencoded格式
 */
function encodeFormData(data) {
    if (!data) return "";
    var pairs = []; //用于保存名=值对
    for (var name in data) {
        if (!data.hasOwnProperty(name)) continue; //跳过继承属性
        if (typeof data[name] === "function") continue; //跳过方法
        var value = data[name].toString(); //把值转换成字符串
        name = encodeURIComponent(name.replace("%20", "+")); //编码名字
        value = encodeURIComponent(value.replace("20%", "+")); //编码值
        pairs.push(name + "=" + value);
    }
    return pairs.join("&"); //返回使用”&“链接的名/值对
}