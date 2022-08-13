module.exports = (api, options, preset) => {
  const { entryFile } = api
  api.extendPackage({ dependencies: { 'ant-design-vue': 'latest' } })
  api.injectImports(entryFile, [`import 'ant-design-vue/dist/antd.css'`, `import Antd from 'ant-design-vue'`])
  // https://github.com/facebook/jscodeshift#transform-module
  // recast + jscodeshift api
  api.transformScript(entryFile, (fileInfo, jApi) => {
    const j = jApi.jscodeshift
    const root = j(fileInfo.source)
    const appRoots = root.find(j.Identifier, (node) => {
      if (node.name === 'app') {
        return true
      }
    })
    appRoots.replaceWith(({ node }) => {
      return j.CallExpression(
        j.memberExpression(node), j.Identifier('use'),
        [j.Identifier('Antd')]
      )
    })
    return appRoots.toSource()
  })
}
