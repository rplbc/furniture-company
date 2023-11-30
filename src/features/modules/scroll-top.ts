export const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export const initScrollTopButtons = (selector = 'button[data-scroll-top=""]') => {
  document.querySelectorAll(selector).forEach((el) => {
    el.addEventListener('click', scrollToTop)
  })
}
