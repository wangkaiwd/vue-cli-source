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
