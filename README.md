# Simulate Chatting

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]
[![devDependencies Status][david-dev-image]][david-dev-url]
[![npm download][download-image]][download-url]
[![npm license][license-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/simulate-chatting.svg?style=flat-square
[npm-url]: https://npmjs.org/package/simulate-chatting
[travis-image]: https://img.shields.io/travis/cycdpo/simulate-chatting.svg?style=flat-square
[travis-url]: https://travis-ci.org/cycdpo/simulate-chatting
[david-image]: https://img.shields.io/david/cycdpo/simulate-chatting.svg?style=flat-square
[david-url]: https://david-dm.org/cycdpo/simulate-chatting
[david-dev-image]: https://david-dm.org/cycdpo/simulate-chatting/dev-status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/cycdpo/simulate-chatting?type=dev
[download-image]: https://img.shields.io/npm/dm/simulate-chatting.svg?style=flat-square
[download-url]: https://npmjs.org/package/simulate-chatting
[license-image]: https://img.shields.io/npm/l/simulate-chatting.svg?style=flat-square

([Releases](https://github.com/cycdpo/simulate-chatting/releases) | [Demo](https://cycdpo.github.io/simulate-chatting/))


## Install
```shell
# via npm
$ npm install simulate-chatting --save

# or via yarn
$ yarn add simulate-chatting
```

## Use
**Simulate chatting based on [Swiper 4+](https://github.com/nolimits4web/Swiper). Add Script of swiper in your project first**

```javascript
import SimulateChat from 'simulate-chatting';

# OR
const SimulateChat = require('simulate-chatting');
```

```javascript
let simulateChat = new SimulateChat(wrapper, options);
```

* `wrapper`: [Element|String] Context Wrapper Element. [Required]
* `options`: looks like: { sound: 'source', chartList: [] }
  * `footer`: [Object]. Default `null`.
    * `height`: [Number|String] Height of footer input. If you want to add the unit, can use the string form. E.g: `'20vw'`.
    * `img`: [String] Image source.
  * `sound`: [String] Audio source. Default `''`.
  * `chartList`: [Array] Array of chartList patterns. Default `[]`.
    * A pattern looks like: `{ pos: 'left', w: 100, h: 30, img: '', delay: 2000 [, ...] }`
      * `pos`: [String] Position of the pattern. Use one of the three options:
        * `'left'`
        * `'center'`
        * `'right'`
      * `w`: [Number|String] Width of pattern. If you want to add the unit, can use the string form. E.g: `'20vw'`.
      * `h`: [Number|String] Height of pattern. If you want to add the unit, can use the string form. E.g: `'20vw'`.
      * `top`: [Number|String] Custom set the margin from the previous. If you want to add the unit, can use the string form. E.g: `'20vw'`.
      * `img`: [String] Image source.
      * `delay`: [Number] Delay from the previous pattern display. Default `1500`.
      * `custom`: [Boolean] Whether to enable custom mode.
      * `html`: [String] Custom html structure of pattern when custom is `true`.
      * `pause`: [Boolean] Whether to pause the running of patterns after this pattern display.
      * `muted`: [Boolean] Whether not to play the sound when this pattern show.
      * `callback`: [Function] if set, run callback function after this pattern show.
  * `SwiperModule`: [Object] Can use custom Swiper. Note the version to 4+. Default `null`.


* Functions:
  * `start()`: Start to display patterns.
  * `pause()`: Pause the running of patterns.
  * `reset()`: Reset patterns.

### Use in browser
```html
<div id="wrapper"></div>

<script src="swiper.min.js"></script>
<script src="simulateChatting.min.js"></script>
<script>
  var simulateChat = new SimulateChat('#wrapper', {
    sound: 'msg.mp3',
    footer: {
      height: 40,
      img: 'footerInput.jpg'
    },
    chartList: [...]
  });

  simulateChat.start();
</script>
```

## CDN
To use via a CDN include this in your html:
```text
<script src="https://cdn.jsdelivr.net/npm/simulate-chatting@0/build/simulateChatting.min.js"></script>
```


