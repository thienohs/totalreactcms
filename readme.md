[![MIT License][license-image]][license-url]

# Total React CMS

[![Professional Support](https://www.totaljs.com/img/badge-support.svg)](https://www.totaljs.com/support/) [![Chat with contributors](https://www.totaljs.com/img/badge-chat.svg)](https://messenger.totaljs.com)

- New version: `v11.0.0` (requires __Total.js +v2.9.2__)
- [__Live chat with professional support__](https://messenger.totaljs.com)
- [__HelpDesk with professional support__](https://helpdesk.totaljs.com)
- [Documentation](https://wiki.totaljs.com?q=eshop+welcome)

---

## Installation (old for eshop)

- check if you have installed [GraphicsMagick](http://www.graphicsmagick.org/)
- `$ cd eshop`
- install `$ npm install total.js`
- install `$ npm install paypal-express-checkout`

Read more in [__documentation__](https://wiki.totaljs.com/?q=eshop+welcome).

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: license.txt

## Installation - Customized version

### Build totaljs
- `$ cd libs/totaljs`
- `$ npm install`
- `$ cd ../../`

### Build nextjs
- `$ cd libs/next.js`
- `$ npm i -g @zeit/ncc`
- `$ yarn`
- `$ cd ../../`

### Install dependencies
- check if you have installed [GraphicsMagick](http://www.graphicsmagick.org/)
- `$ npm install`

### Run the program (development)
- `$ npm run dev`


## Instruction on linked local library
### Link local customized totaljs library instead of using the remote
- `$ npm i libs/totaljs`
- `$ npm i -g @zeit/ncc`
- `$ cd libs/next.js`
- `$ yarn`
- `$ cd ../../`
- `$ npm i libs/next.js/packages/next`