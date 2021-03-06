# ArmorJS - Headless
## Headless Browser for automated testing

![CI](https://github.com/armorjs/headless/workflows/CI/badge.svg?branch=master) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=armorjs_headless&metric=coverage)](https://sonarcloud.io/dashboard?id=armorjs_headless) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=armorjs_headless&metric=alert_status)](https://sonarcloud.io/dashboard?id=armorjs_headless)


## Contents
- [About ArmorJS](#about-armorjs)
- [Installation](#Installation)
- [Usage](#usage)
- [Build](#build)
- [Testing](#testing)
- [License](#license)

## About ArmorJS
ArmorJS solves unique challenges in the enterprise node ecosystem. Auditing projects for security, reliability, and even license compatibility are monumental tasks when a project includes thousands of frequently changing dependencies.

ArmorJS standards:
* Full typescript support.
* Consistent API between releases.
* Extremely small footprint (for webpacking).
* No more than 5 external dependencies (excluding dev dependencies).
* Compatible with web, node, and serverless deployment.
* Thorough test coverage.
* MIT License.


## Install

***With yarn (preferred):***
```yarn add @armorjs/headless```

With NPM:
```npm install @armorjs/headless```

## Usage

### Library Usage

#### Typescript
```
import { ArmorHeadless } from '@armorjs/headless';
```

#### Node
```
const ArmorHeadless = require('@armorjs/headless');
```

## Build
Build (or rebuild) the config package:

***With Yarn (preferred):***
```
yarn install
yarn build
```

With NPM:
```
npm install
npm run-script build
```
## Testing

Headless implements unit tests using jest. Run the following commands from the directory where headless has been installed.

***With yarn (preferred):***
```
yarn install
yarn test
```

With NPM:
```
npm install
npm run-script test
```

## License
[MIT](LICENSE) &copy; Michael Brich