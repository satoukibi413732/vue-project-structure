Date.prototype.format = function (format) {
  let args = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
  };
  if (/(y+)/.test(format))
    format = format.replace(RegExp.$1, String(this.getFullYear()).substr(4 - RegExp.$1.length));
  for (let i in args) {
    let n = args[i];
    if (new RegExp('(' + i + ')').test(format))
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? n : ('00' + n).substr(String(n).length),
      );
  }
  return format;
};
