# Window Scroll Utility

Handy cross-browser utilities to get scrollTop and scrollHeight of the whole document

## Why?

`document.documentElement.scrollHeight` and `document.documentElement.scrollTop` don't work in all browsers.

For more information, see: [Window sizes and scrolling](https://javascript.info/size-and-scroll-window)

## Installation

npm:

```
npm install window-scroll-util --save
```

Yarn:

```
yarn add window-scroll-util
```

## Usage

```javascript
import {
  getDocumentScrollHeight,
  getDocumentScrollTop,
  getDocumentClientHeight,
  getDocumentScrollBottom,
} from 'window-scroll-util';

const scrollHeight = getDocumentScrollHeight();
const scrollTop = getDocumentScrollTop();
const clientHeight = getDocumentClientHeight();
const scrollBottom = getDocumentScrollBottom(); // scrollHeight - scrollTop - clientHeight
```

## License

MIT