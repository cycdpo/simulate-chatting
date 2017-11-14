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
    this.context = isString(context)
      ? document.querySelector(context)
      : context;

    this.context.style.position = 'relative';

    let
      contextWidth = this.context.getBoundingClientRect().width
    ;

    console.log(_chartListHandle(chartList));


    this.config = {
      width: contextWidth,
      footer: {
        height: _setCustomValue(footer.height, parseInt(contextWidth / 640 * 80, 10) + 'px'),
        imgUrl: footer.imgUrl || imgFooterInput
      },
      chartList: chartList
    };

    console.log(this.config);

    this._initUI();
  };

  start() {

  };

  _initUI() {
    this.container = document.createElement('div');
    this.container.classList.add(_style.container);

    this.container.innerHTML = containerTemplate({
      _style,
      config: this.config,
    });

    this.context.appendChild(this.container);
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
