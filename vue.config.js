const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir); //获取绝对路径
}
module.exports = {
  /*
  简单配置别名
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        network: "@/network",
        utils: "@/utils",
        views: "@/views",
      },
    },
  },
  */
  chainWebpack: (config) => {
    // 删除prefetch
    config.plugins.delete("prefetch-index");
    // 细粒度配置别名
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("assets", resolve("./src/assets"))
      .set("components", resolve("./src/components"))
      .set("common", resolve("./src/components/common"))
      .set("network", resolve("./src/network"))
      .set("views", resolve("./src/views"))
      .set("components", resolve("./src/components/content"));
  },
  // 配置全局scss文件.
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~assets/css/base.scss";`,
      },
    },
  },
  // 解决资源部署是的路径问题,资源可以部署在任意的路径.
  publicPath: "./",
};
