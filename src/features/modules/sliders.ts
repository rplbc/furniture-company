import Swiper from 'swiper'
import { Navigation, Scrollbar } from 'swiper/modules'

import 'swiper/css'

import type { SwiperOptions } from 'swiper/types'

export const initSliders = () => {
  const sliderElements = document.querySelectorAll<HTMLElement>('.swiper[data-swiper-args]')

  const initSlider = (el: HTMLElement): Swiper => {
    const dataArgs = el.dataset.swiperArgs!
    const root = el.closest('[data-root]')
    let args: SwiperOptions = {
      modules: [Navigation, Scrollbar],
    }

    try {
      const newArgs = JSON.parse(dataArgs)
      let extraArgs = {}

      if (root) {
        extraArgs = {
          navigation: {
            nextEl: root.querySelector<HTMLElement>('[data-el="swiper-button-next"]'),
          },
          scrollbar: {
            el: root.querySelector<HTMLElement>('[data-el="swiper-scrollbar"]'),
            hide: false,
          },
        }
      }

      args = {
        ...args,
        ...newArgs,
        ...extraArgs,
      }
    } catch (e) {
      console.log(e)
    }

    return new Swiper(el, args)
  }

  return [...sliderElements].map(initSlider)
}
