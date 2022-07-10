## Record
Global Usage:
* Why we can execute `vue` command globally
  * `vue` in [environment variables](https://ss64.com/osx/syntax-env_vars.html) 
  * `where vue` to get `vue` command location
  * vue is a symbolic link, it's real location in `/somepath/node_modules/.bin/vue.js`
  * symbolic link location list in `PATH`
  * environment variable `PATH`: A colon-separated list of directories in which the shell looks for commands
* Why `/.bin/vue.js` can execute directly ?
  * add [`#!/usr/bin/env node`](https://stackoverflow.com/a/33510581/12819402) in first line of code
  * [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))
* package [`bin`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#bin) field
* [associating a scope with a registry](https://docs.npmjs.com/cli/v8/using-npm/scope#associating-a-scope-with-a-registry)

Use as a package scope dependency
* binary executable name in `npm scripts` 
* in addition to the shell's pre-existing `PATH`, `npm run` adds `node_modules/.bin` to the `PATH` provided to scripts

### Debug Code

* [chrome](https://nodejs.org/en/docs/guides/debugging-getting-started/#chrome-devtools-55-microsoft-edge)
* [webstorm](https://nodejs.org/en/docs/guides/debugging-getting-started/#jetbrains-webstorm-and-other-jetbrains-ides)
* [Command-line options](https://nodejs.org/en/docs/guides/debugging-getting-started/#command-line-options)

example of chrome:

```shell
node --inspect-brk $HOME/.yarn/bin/vue create test-debug
```
![](https://cdn.jsdelivr.net/gh/wangkaiwd/drawing-bed/202205221656656.png)

click inspect in above picture, chrome will enter `devtool` debugger interface

example of webstorm:

![](https://cdn.jsdelivr.net/gh/wangkaiwd/drawing-bed/202205221719093.png)

use this configuration, code will stop in your breakpoint within webstorm

### Debug Test

* WebStorm: debug npm script with arguments
* node debug: script arguments is your test filename
```shell
node --inspect-brk --experimental-vm-modules scripts/test.js creator
```
### Publish

* internal invoke `lerna publish`

### Npm Packages

* [npm init](https://docs.npmjs.com/cli/v8/commands/npm-init)

### Packages
* commander
* minimist
* lodash
* debug
* chalk
* inquirer
* ejs

### Flow

* registry command in `bin/vue.js`
* select feature
  * modify project config by cli plugin  


#### Create

Only deep dive `vue-router`

1. select feature
2. according feature continue config project
3. generate project

Base template:

* vue3

Feature:

* Component library
* Router

#### Preset

#### Plugin

Naming and discoverability:
* name convention: `vue-cli-plugin-<name>`, `@scope/vue-cli-plugin-name`

Generator:
* During a project's initial creation, if the CLI plugin is installed as part of the project creation preset
* When the plugin is installed after project's creation and invoked individually via `vue add` or `vue invoke`

### Dynamic load `vue-router`
> [Plugin Development Guide](https://cli.vuejs.org/dev-guide/plugin-dev.html#plugin-development-guide)

* cli-plugin-router

Thinking: 

### Problem
- [ ] Vue3 demo project run failed ?
- [ ] how to handle ast ?


