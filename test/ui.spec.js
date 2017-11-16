import path from 'path';

import Swiper from 'swiper';
import SimulateChat from '../build/SimulateChat.min';

describe('ui spec', () => {
  const
    wrapper = document.createElement('div')
  ;

  wrapper.style.width = '320px';
  wrapper.style.height = '520px';

  let
    simulateChat = new SimulateChat(wrapper, {
      sound: path.resolve('static', 'demoFiles', 'msg.mp3'),
      footer: {
        img: path.resolve('static', 'demoFiles', 'footerInput.jpg'),
        height: 40
      },
      chartList: [],
    }, Swiper)
  ;

  test('default exist test', () => {
    expect(simulateChat.el.context).toBeTruthy();
    expect(simulateChat.el.container).toBeTruthy();
    expect(simulateChat.el.swiperContainer).toBeTruthy();
    expect(simulateChat.el.swiperWrapper).toBeTruthy();
    expect(simulateChat.el.chartList).toBeTruthy();
    expect(simulateChat.swiper).toBeTruthy();

    expect(simulateChat.el.context).toBe(wrapper);
  });
});
