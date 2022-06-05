## Record

* Why we can execute `vue` command globally
  * `vue` in [environment variables](https://ss64.com/osx/syntax-env_vars.html)

### Debug Code

* [chrome](https://nodejs.org/en/docs/guides/debugging-getting-started/#chrome-devtools-55-microsoft-edge)
* [webstorm](https://nodejs.org/en/docs/guides/debugging-getting-started/#jetbrains-webstorm-and-other-jetbrains-ides)
* [Command-line options](https://nodejs.org/en/docs/guides/debugging-getting-started/#command-line-options)

example of chrome:

```shell
node --inspect-brk /Users/wangkai/.yarn/bin/vue create test-debug
```
![](https://cdn.jsdelivr.net/gh/wangkaiwd/drawing-bed/202205221656656.png)

click inspect in above picture, chrome will enter `devtool` debugger interface

example of webstorm:

![](https://cdn.jsdelivr.net/gh/wangkaiwd/drawing-bed/202205221719093.png)

use this configuration, code will stop in your breakpoint within webstorm

### Debug Test

* WebStorm: debug npm script with arguments
* node debug
```shell
node --inspect-brk --experimental-vm-modules scripts/test.js creator
```

### Npm

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

registry command in `bin/vue.js`

#### Create

Only deep dive `vue-router`

1. select feature
2. according feature continue config project
3. generate project

### Dynamic load `vue-router`
* cli-plugin-router

### Problem
- [x] Vue3 demo project run failed ?
- [x] how to handle ast ?


