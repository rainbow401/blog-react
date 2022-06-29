// config-overrides.js
const { override, fixBabelImports, addLessLoader} = require("customize-cra");

module.exports = {
    webpack: override(
        fixBabelImports("import", {
            libraryName: "@arco-design/web-react",
            libraryDirectory: "es",
            camel2DashComponentName: false,
            style: true, // 样式按需加载,文档里面是true是无效的，需要改为css
        }),
        addLessLoader({
                modifyVars: {  // 在less-loader@6 modifyVars 配置被移到 lessOptions 中
                    "@btn-font-weight": "500px"
                },
                // javascriptEnabled: true
        }),
    ),

};
