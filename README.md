# React Boilerplate

![GitHub](https://img.shields.io/github/license/eclectic-coding/react-boilerplate)
![David](https://img.shields.io/david/eclectic-coding/react-boilerplate)
[![GitHub forks](https://img.shields.io/github/forks/eclectic-coding/react-boilerplate)](https://github.com/eclectic-coding/react-boilerplate/network)
[![GitHub stars](https://img.shields.io/github/stars/eclectic-coding/react-boilerplate)](https://github.com/eclectic-coding/react-boilerplate/stargazers)
![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Feclecticcoding)

This is a Boilerplate project of [Create React App]() based on tutorials by [Robin Wieruch](https://www.robinwieruch.de/), with some personal modifications. Have you ever started a React Project and deleted the React Icon, moved the App component, and made other changes?

The starting point where these tutorials:

**React Setup Series**
- [How to set up a modern JavaScript project](https://www.robinwieruch.de/javascript-project-setup-tutorial/)
- [How to set up a Webpack project](https://www.robinwieruch.de/webpack-setup-tutorial/)
- [How to set up Webpack with Babel](https://www.robinwieruch.de/webpack-babel-setup-tutorial/)
[- How to set up React with Webpack and Babel](https://www.robinwieruch.de/minimal-react-webpack-babel-setup)

**Eslint**
- [How to use ESLint in Webpack](https://www.robinwieruch.de/webpack-eslint/)
- [How to use ESLint in React](https://www.robinwieruch.de/react-eslint-webpack-babel/)

**Advanced Webpack Setup**
- [How to set up a Webpack project](https://www.robinwieruch.de/webpack-setup-tutorial/)
- [How to set up Webpack with Babel](https://www.robinwieruch.de/webpack-babel-setup-tutorial/)
- [How to set up an advanced Webpack application](https://www.robinwieruch.de/webpack-advanced-setup-tutorial)

**Additional Tutorials**
- [How to use CSS Modules in React](https://www.robinwieruch.de/react-css-modules)
- [How to use Images with Webpack](https://www.robinwieruch.de/webpack-images)

### Added Features
- Automatic starting of development server via Webpack Plugin [OpenBrowserPlugin](https://github.com/baldore/open-browser-webpack-plugin)
- Added SASS support with the canonical SASS release [Dart-Sass](https://github.com/sass/dart-sass). Dart-sass is my preference as it has the latest feature set of SASS over [Node-sass](https://github.com/sass/node-sass)

## Installation
So, when to start a new React project, instead of usign Create-React-App, clone this repository as your starting point:
```
git clone git@github.com:eclectic-coding/react-boilerplate.git
```
Then install packages:
```
yarn
or 
npm install
```
Start the `DEV` server using `yarn start` or `npm run dev`*.
*Using the clone procedure, you may want to delete `.git/` and reinitialize `git` for your own project history.

### TODO List
- Add SVG support

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Chuck Smith** - *Initial work* - [Eclectic-Coding](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
