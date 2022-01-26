export default function debounce(fun, delay) {
  let timer = null
  return function (...args) {//闭包
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this,args)
    },delay)
  }
}
