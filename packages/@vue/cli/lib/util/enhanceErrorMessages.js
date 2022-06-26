const program = require('commander')
// eslint-disable-next-line node/no-extraneous-require
const chalk = require('chalk')

module.exports = (methodName, log) => {
  // rewrite commander prototype method to get more friendly error message
  // missingArguments
  // unknownOption
  // optionMissingArgument
  program.Command.prototype[methodName] = function (...args) {
    if (methodName === 'unknownOption' && this._allowUnknownOption) {
      return
    }
    this.outputHelp()
    console.log(`  ` + chalk.red(log(...args)))
    console.log()
    process.exit(1)
  }
}
