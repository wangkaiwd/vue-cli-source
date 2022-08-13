module.exports = cli => {
  cli.injectFeature({
    name: 'library',
    value: 'library',
    short: 'library',
    description: 'Fashion vue3 component library',
    checked: true
  })

  cli.onPromptComplete((answers, options) => {
    if (answers.features.includes('router')) {
      options.plugins['@vue/cli-plugin-library'] = {}
    }
  })
}
