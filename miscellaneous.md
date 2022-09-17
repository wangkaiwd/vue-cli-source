## Webpack

### DevServer
Why local develop environment use express server?
* subdirectory assets access when deploy to remote server
* url fallback when history router mode

### Express

* start https server

## How to test

### Test File Operate

* [fs-extra](https://github.com/jprichardson/node-fs-extra/blob/master/lib/ensure/__tests__/ensure.test.js)
* [vue-cli](https://github.com/vuejs/vue-cli/blob/ef08a08c41b028a2484f262414a8c91d151febc7/packages/%40vue/cli/__tests__/Generator.spec.js)

fs-extra:

* create test relative directories in os temporary directory
* create test dir in `beforeEach` and remove test dir in `afterEach`

vue-cli:

* mock fs with [`memfs`](https://github.com/streamich/memfs)
* [manual module](https://jestjs.io/docs/manual-mocks#mocking-node-modules)
* but how to mock `fs/promises`?

## Questions

* How to support vue command and command line interactive ?
  * commander
  * inquirer
* How to create project template
  * [how to generate base template with `cli-service`](https://github.com/vuejs/vue-cli/blob/4a0655f7ac09b64d2b47506e7f21e7923d43262b/packages/%40vue/cli-service/generator/index.js#L2-L5)
  * plugin mechanism
  * vue-codemod: ast to ast 
* How to handle [treeing shaking](https://webpack.js.org/guides/tree-shaking/)?

notes:

symlink(symbolic link or soft link) which include another symlink:

![](https://cdn.jsdelivr.net/gh/wangkaiwd/drawing-bed/202207070009752.png)

* vue -> yarn/link/@vue/cli/bin/vue.js
* cli -> vue-cli

## Nodejs

* [FS constants](https://nodejs.org/api/fs.html#fs-constants)