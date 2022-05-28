module.exports = cli => {
  cli.injectFeature({
    name: 'componentLibrary',
    value: 'componentLibrary',
    short: 'componentLibrary',
    description: 'Fashion vue3 component library',
    checked: true
  })
  cli.injectPrompt({
    name: 'componentLibrary',
    when: answers => answers.features.includes('componentLibrary'),
    type: 'list',
    message: 'Pick a component library',
    description: 'Use component library to create website quickly',
    choices: [
      {
        name: 'Ant design vue',
        value: 'ant-design-vue'
      },
      {
        name: 'Element plus',
        value: 'element-plus'
      }
    ]
  })

  cli.onPromptComplete((answers, options) => {
    console.log('answers', answers, options)
  })
}
