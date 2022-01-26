export const timeStamp = (fun, delay) => {
  let lastTime = 0,
  return function () {
      nowTime = Date.now();
    if (lastTime && nowTime - lastTime > delay) {
      fun.apply(this, ...args);
    } else {
      lastTime = nowTime;
      fun.apply(this, ...args);
    }
  };
};

export function timer(fun, delay) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer);
        fun.apply(this, args);
      }, delay);
    }
  };
}
