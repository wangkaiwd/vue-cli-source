module.exports = (api, options, preset) => {
  const { entryFile } = api
  api.extendPackage({ dependencies: { 'ant-design-vue': 'latest' } })
  api.injectImports(entryFile, [`import 'ant-design-vue/dist/antd.css'`, `import Antd from 'ant-design-vue'`])
  // https://github.com/facebook/jscodeshift#transform-module
  // recast + jscodeshift api
  api.transformScript(entryFile, (fileInfo, jApi) => {
    console.log('fileInfo', fileInfo, jApi)
    return fileInfo.source
  })
}
