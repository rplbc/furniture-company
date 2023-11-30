import { animate, inView } from 'motion'

const DEFAULT_MARGIN = '0px 0px -25% 0px'
const DURATION = 0.6

export const initAnimations = () => {
  document.querySelectorAll<HTMLElement>('[data-animate="from-bottom"]').forEach((el) => {
    inView(
      el,
      (i) => {
        animate(i.target, { y: [60, 0], opacity: 1 }, { duration: DURATION })
      },
      {
        margin: DEFAULT_MARGIN,
      }
    )
  })
}
