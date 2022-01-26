import VueRouter from "vue-router";
export default function rewritePush() {
  const originalPush = VueRouter.prototype.push;
  VueRouter.prototype.push = function(location, onComplete, onAbort) {
    if (onComplete || onAbort) //如果有错误,重新调用.
      return originalPush.call(this, location, onComplete, onAbort);
    return originalPush.call(this, location).catch((err) => err);
  };
}
