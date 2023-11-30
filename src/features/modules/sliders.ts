import Swiper from 'swiper'
import { Navigation, Scrollbar } from 'swiper/modules'

import type { SwiperOptions } from 'swiper/types'

export const initSliders = () => {
  const sliderElements = document.querySelectorAll<HTMLElement>('.swiper')

  const initSlider = (el: HTMLElement): Swiper => {
    const dataArgs = el.dataset.swiperArgs
    const root = el.closest('[data-root]')
    let args: SwiperOptions = {
      modules: [Navigation, Scrollbar],
    }

    if (dataArgs) {
      try {
        const newArgs = JSON.parse(dataArgs)
        args = {
          ...args,
          ...newArgs,
        }
      } catch (e) {
        console.log(e)
      }
    }

    if (root) {
      try {
        args = {
          ...args,
          navigation: {
            nextEl: root.querySelector<HTMLElement>('[data-el="swiper-button-next"]'),
          },
          scrollbar: {
            el: root.querySelector<HTMLElement>('[data-el="swiper-scrollbar"]'),
            hide: false,
          },
        }
      } catch (e) {
        console.log(e)
      }
    }

    return new Swiper(el, args)
  }

  return [...sliderElements].map(initSlider)
}
