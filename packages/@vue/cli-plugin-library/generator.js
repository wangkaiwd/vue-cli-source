module.exports = (api, options, preset) => {
  const { entryFile } = api
  api.extendPackage({ dependencies: { 'ant-design-vue': 'latest' } })
  api.injectImports(entryFile, [`import 'ant-design-vue/dist/antd.css'`, `import Antd from 'ant-design-vue'`])
  // https://github.com/facebook/jscodeshift#transform-module
  // recast + jscodeshift api
  api.transformScript(entryFile, (fileInfo, jApi) => {
    const j = jApi.jscodeshift
    const root = j(fileInfo.source)

    const appRoots = root.find(j.CallExpression, (node) => {
      if (j.Identifier.check(node.callee) && node.callee.name === 'createApp') {
        return true
      }

      if (
        j.MemberExpression.check(node.callee) &&
        j.Identifier.check(node.callee.object) &&
        node.callee.object.name === 'Vue' &&
        j.Identifier.check(node.callee.property) &&
        node.callee.property.name === 'createApp'
      ) {
        return true
      }
    })

    appRoots.replaceWith(({ node: createAppCall }) => {
      return j.callExpression(
        j.memberExpression(createAppCall, j.identifier('use')),
        [j.identifier('Antd')]
      )
    })

    return root.toSource()
  })
}
