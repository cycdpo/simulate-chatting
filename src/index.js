// template
import containerTemplate from './template/container.pug'

// style
import _style from './style.scss';

export default class SimulateChat {
  constructor(context, {
    footer = null,
    chartList = [],
    sound = '',
    SwiperModule = null,
  }) {
    this.el = {};

    this.el.context = isString(context)
      ? document.querySelector(context)
      : context;

    this.el.context.style.position = 'relative';

    console.log(_chartListHandle(chartList));

    this.config = {
      width: this.el.context.getBoundingClientRect().width,
      chartList: chartList,
      footer: null,
      sound: null,
      SwiperModule: SwiperModule || window.Swiper,
    };

    this.state = {
      next: null,
      isPausing: true,
      done: false,
    };

    // footer Input
    if (footer) {
      this.config.footer = {};
      this.config.footer.height = _formattingCustomValue(footer.height);
      this.config.footer.img = footer.img;
    }

    // sound
    if (sound) {
      this.config.sound = new Audio(sound);
    }

    this.swiper = null;
    this._soundInit();
    this._initUI();
    console.log(this.config);
  };

  start() {
    if (this.state.done) {
      return this;
    }

    this.state.isPausing = false;

    // fix sound(must user action)
    this.config.sound.play();
    this.config.sound.pause();

    this._showOne();
    return this;
  };

  pause() {
    this.state.isPausing = true;
    return this;
  };

  _showOne() {
    // stage 1
    if (!this.state.next) {
      this.state.next = this.el.chartList.firstChild;
    }

    let
      delay = this.state.next.dataset.dalay || 1500
    ;

    setTimeout(() => {
      if (this.state.isPausing) {
        return;
      }

      // stage 2
      let needPause = Boolean(this.state.next.dataset.pause);
      this._soundPlay();
      this.state.next.classList.add(_style.show);
      this.swiper.updateSlides();
      this._scrollToBottom();

      // set next
      this.state.next = this.state.next.nextElementSibling;

      if (!this.state.next) {
        console.log('done!');
        this.state.done = true;
        this.state.isPausing = true;
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

    this.swiper = new this.config.SwiperModule(this.el.swiperContainer, {
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

  _soundInit() {
    let
      _soundLoad = () => {
        if (!this.config.sound.load) {
          this.config.sound.load();
        }

        console.log('sound load');
        document.body.removeEventListener('touchstart', _soundLoad);
      };

    document.body.addEventListener('touchstart', _soundLoad);
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

  _soundPlay() {
    if (!this.config.sound) {
      return;
    }

    this.config.sound.play();
  };
};

// private
let
  isString = (str) => {
    return (typeof str === 'string') && str.constructor === String;
  }

  , _formattingCustomValue = (inputValue) => {
    if (isString(inputValue)) {
      return inputValue;
    } else {
      return inputValue + 'px';
    }
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
