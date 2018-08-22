# Personal lab for implementation of different features and technologies.

### Used Technologies
- `Webpack 4.17.0` - transpiling JS via Babel, transpiling scss to css, handling font and images - [documentation](https://webpack.js.org/concepts/ "Webpack documentation")
- `webpack-dev-server` - development server that provides live reloading - [github](https://github.com/webpack/webpack-dev-server)
- `Yarn` - dependency manager - [official web site](https://yarnpkg.com/en/)
- `git-flow` - git workflow [cheat-sheet](https://danielkummer.github.io/git-flow-cheatsheet/)
- `SCSS` - styles definition [guide](https://sass-lang.com/guide)
- `node.js 9.11.2` - JavaScript runtime - [official web site](https://nodejs.org/en/)

### Getting started
1. Clone the repository.
2. Navigate to the root project folder.
3. Make sure you have the appropriate version of node.js.
4. Install Yarn globally.
5. Install dependencies by running:
```
yarn install
```

### To start developing:
1. To build and watch the code for changes, run:
```
yarn dev
```
2. Open the project in browser at [http://localhost:8080](http://localhost:8080).

### To build production code:
1. Build the assets:
```
yarn build
```
2. All built artefacts will be available in the `dist` folder
3. To check the built run:
```
yarn check:prod
```
This will run a simple `express` server on [http://localhost:3001](http://localhost:3001).