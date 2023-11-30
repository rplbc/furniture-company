import './styles/index.css'
import 'swiper/css'

import {
  initAnimations,
  initHeader,
  initProducts,
  initScrollTopButtons,
  initSearch,
  initSliders,
  initVideos,
} from './features'

// Init
;(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  initAnimations()
  initHeader()
  initProducts()
  initScrollTopButtons()
  const { activate: activateSearch } = initSearch()
  initSliders()
  initVideos()

  const url = new URL(window.location.href)
  if (url.searchParams.get('s') === 'open') {
    activateSearch()
  }
})()
