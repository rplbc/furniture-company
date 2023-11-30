import './styles/index.css'

import {
  initAnimations,
  initHeader,
  initProducts,
  initScrollTopButtons,
  initVideos,
  searchModalController,
} from './features'

// Init
;(() => {
  initAnimations()
  initHeader()
  initProducts()
  initScrollTopButtons()
  initVideos()

  // Open search modal if URL has s parameter set to open
  const { activate: activateSearch } = searchModalController
  const url = new URL(window.location.href)
  if (url.searchParams.get('s') === 'open') {
    activateSearch()
  }
})()

// Lazy init
;(async () => {
  ;(await import('./features/modules/sliders')).initSliders()
})()
