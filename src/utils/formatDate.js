export function dateFormat(date, format) {
  if (typeof date === "string") {
    let md = date.match(/(\/Date\((\d+)\)\/)/);
    if (md && md.length >= 3) {
      date = parseInt(md[2]);
    } else {
      date = parseInt(date);
    }
  }
  date = new Date(date);
  if (!date || date.toUTCString == "Invalid Date") {
    return "Invalid Date";
  }
  // 映射
  const map = {
    M: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
    q: Math.floor((date.getMonth + 3) / 3),
    S: date.getMilliseconds(),
  };
  format = format.replace(/([yMdhmsqS])+/g, (all, t) => {
    let v = map[t];
    if (v !== undefined) {
      if (t.length >= 1) {
        v = "0" + v;
        v = v.substr(v.length - 2); //当v > 2时,从第二个元素获取.substr()包含起始位的字符.
      }
      return v;
    } else if (t == "y") {
      return (date.getFullYear() + "").substr(4 - all.length);
    }
  });
  return format;
}
