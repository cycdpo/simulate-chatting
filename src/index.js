import Swiper from 'swiper';

// template
import containerTemplate from './template/container.pug'

// style
import _style from './style.scss';

// image
import imgFooterInput from '../static/image/footerInput.jpg';

export default class SimulateChat {
  constructor(context, {
    footer = {},
    chartList = []
  }) {
    this.el = {};

    this.el.context = isString(context)
      ? document.querySelector(context)
      : context;

    this.el.context.style.position = 'relative';

    let
      contextWidth = this.el.context.getBoundingClientRect().width
    ;

    console.log(_chartListHandle(chartList));

    this.config = {
      width: contextWidth,
      footer: {
        height: _setCustomValue(footer.height, parseInt(contextWidth / 640 * 80, 10) + 'px'),
        imgUrl: footer.imgUrl || imgFooterInput
      },
      chartList: chartList,
      next: null,
      done: false
    };

    this.swiper = null;

    this._initUI();
    console.log(this.config);
  };

  start() {
    if (this.config.done) {
      return;
    }

    if (!this.config.next) {
      this.config.next = this.el.chartList.firstChild;
    }

    this._showOne();
  };

  _showOne() {
    let
      delay = this.config.next.dataset.dalay || 1500
      , needPause = Boolean(this.config.next.dataset.pause)
    ;

    console.log(delay);
    console.log(needPause);

    setTimeout(() => {
      this.config.next.classList.add(_style.show);
      this.swiper.updateSlides();
      this._scrollToBottom();

      // set next
      this.config.next = this.config.next.nextElementSibling;
      console.log(this.config.next);

      if (!this.config.next) {
        this.config.done = true;
      } else {
        if (!needPause) {
          this._showOne();
        }
      }
    }, delay);
  };

  _initUI() {
    this.el.container = document.createElement('div');
    this.el.container.classList.add(_style.container);

    this.el.container.innerHTML = containerTemplate({
      _style,
      config: this.config,
    });

    this.el.context.appendChild(this.el.container);

    this.el.swiperContainer = this.el.container.querySelector('.' + _style.main);
    this.el.swiperWrapper = this.el.container.querySelector('.' + _style.swiperWrapper);
    this.el.chartList = this.el.swiperWrapper.querySelector('.' + _style.chartList);

    this.config.swiperContainer = {
      height: this.el.swiperContainer.getBoundingClientRect().height
    };

    this.swiper = new Swiper(this.el.swiperContainer, {
      nested: true,
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      mousewheel: true,

      // namespace
      wrapperClass: _style.swiperWrapper,
      slideClass: _style.chartList,
      slideActiveClass: _style.swiperSlideActive,
    });

  };

  _scrollToBottom(speed = 200) {
    let
      chartListHeight = this.el.chartList.getBoundingClientRect().height
      , distance = this.config.swiperContainer.height - chartListHeight
    ;

    if (distance > 0) {
      return;
    }

    this.el.swiperWrapper.style.cssText = 'transition-duration: '
      + speed
      + 'ms; transform: translate3d(0px, '
      + distance
      + 'px, 0px);';
  };
};

// private
let
  _addStyles = (element, styles) => {
    for (let name in styles) {
      element.style[name] = styles[name];
    }
  }

  , isString = (str) => {
    return (typeof str === 'string') && str.constructor === String;
  }

  , _formattingCustomValue = (inputValue) => {
    if (isString(inputValue)) {
      return inputValue;
    } else {
      return inputValue + 'px';
    }
  }

  , _setCustomValue = (inputValue, defaultValue) => {
    if (!inputValue) {
      return defaultValue;
    }

    return _formattingCustomValue(inputValue);
  }

  , _chartListHandle = (chartList) => {
    return chartList.map(obj => {
      if (obj.w) {
        obj.w = _formattingCustomValue(obj.w)
      }

      if (obj.h) {
        obj.h = _formattingCustomValue(obj.h)
      }

      return obj
    });
  }
;
