import './styles/index.css'
import 'swiper/css'

import {
  initAnimations,
  initHeader,
  initProducts,
  initScrollTopButtons,
  initSliders,
  initVideos,
  searchModalController,
} from './features'

// Init
;(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  initAnimations()
  initHeader()
  initProducts()
  initScrollTopButtons()
  initSliders()
  initVideos()

  // Open search modal if URL has s parameter set to open
  const { activate: activateSearch } = searchModalController
  const url = new URL(window.location.href)
  if (url.searchParams.get('s') === 'open') {
    activateSearch()
  }
})()
