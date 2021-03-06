# @vue/cli-plugin-typescript

> Плагин typescript для vue-cli

Использует TypeScript + `ts-loader` + [fork-ts-checker-webpack-plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin) для более быстрой проверки типов вне основного потока.

## Конфигурация

TypeScript может быть сконфигурирован через `tsconfig.json`.

С версии `3.0.0-rc.6`, `typescript` является зависимостью этого пакета (peer dependency), поэтому можно использовать определённую версию TypeScript обновляя `package.json` проекта.

Этот плагин может использоваться вместе с `@vue/cli-plugin-babel`. При использовании вместе с Babel, этот плагин должен генерировать ES2015 и делегировать остальное Babel для автоматического добавления полифилов на основе целевых браузеров.

## Кэширование

[cache-loader](https://github.com/webpack-contrib/cache-loader) используется по умолчанию, кэш хранится в `<projectRoot>/node_modules/.cache/ts-loader`.

## Параллелизация

[thread-loader](https://github.com/webpack-contrib/thread-loader) используется по умолчанию, если машина имеет более 1 ядра CPU. Это можно отключить указав `parallel: false` в файле `vue.config.js`.

Опция `parallel` должна быть установлена в `false` при использовании Typescript в комбинации с не-сериализуемыми опциями загрузчика, таким как регулярные выражения, даты и функции. Такие опции не будут корректно переданы в `ts-loader`, что может привести к неожиданным ошибкам.

## Установка в уже созданный проект

```bash
vue add typescript
```

## Внедряемые правила webpack-chain

- `config.rule('ts')`
- `config.rule('ts').use('ts-loader')`
- `config.rule('ts').use('babel-loader')` (при использовании вместе с `@vue/cli-plugin-babel`)
- `config.rule('ts').use('cache-loader')`
- `config.plugin('fork-ts-checker')`
