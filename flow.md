## Record

* Why we can execute `vue` command globally
  * `vue` in [environment variables](https://ss64.com/osx/syntax-env_vars.html)

### Debug

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
