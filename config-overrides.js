// config-overrides.js
const { override, fixBabelImports, addLessLoader} = require("customize-cra");

module.exports = {
    webpack: override(
        fixBabelImports("import", {
            libraryName: "@arco-design/web-react",
            libraryDirectory: "es",
            camel2DashComponentName: false,
            style: "css", // 样式按需加载,文档里面是true是无效的，需要改为css
        }),
        addLessLoader({
            lessOptions: {
                modifyVars: {  // 在less-loader@6 modifyVars 配置被移到 lessOptions 中
                    'menu-light-color-bg': '#000',
                    // '@menu-light-color-bg': '#000',
                    'menu-light-color-bg-item_selected': '#000',
                    // '@menu-light-color-bg-item_selected': '#000',
                    // '@menu-font-size': '20px',
                    'menu-font-size': '20px',
                },
                javascriptEnabled: true
            }
        }),
    ),

};
