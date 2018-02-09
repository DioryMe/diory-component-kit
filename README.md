# diory-component-kit

> Starter kit for creating diory components

## Getting started with kit

### Clone

Clone from [Github](https://www.github.com/)

```sh
$ git clone https://github.com/DioryMe/diory-components-kit.git
```

### Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm install
```

### Store

Store to [Github](https://www.github.com/)

```sh
$ git init
$ git add .
$ git commit -m "First commit"
$ git remote add origin <your-diory-component-remote-repository-URL>
$ git push -u origin master
```

### Publish

Publish to [npm](https://www.npmjs.com/)

```sh
$ npm adduser
$ npm login
$ npm publish
```


## Getting started with your diory component

### Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i your-diory-component --save
```

### Import

```js
import { YourDioryComponent } from 'your-diory-component'

```

### Usage

```jsx
<YourDioryComponent { ...props } />
```

## Developing

Build, run lint and run unit tests in watch mode:

```sh
$ npm run build:watch
$ npm run test:watch
$ npm run lint:watch

```

## Running example

Run example in browser with hot loader:

```sh
$ npm start
```

Go to http://localhost:9010

## Changes

 - 0.1.0 (9.2.2018)
    - Initial version

## Author

[**Olli-Pekka Pohjola**](mailto:oopee@iki.fi)

## License

Copyright © 2017 Olli-Pekka Pohjola

Licensed under the MIT license.