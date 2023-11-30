import { animate } from 'motion'
import { createFocusTrap } from 'focus-trap'
import { lockBodyScroll, unlockBodyScroll } from '../../utils/scroll-toggle'

export const initSearch = () => {
  const searchDialog = document.querySelector<HTMLElement>('[data-dialog="search"]')!
  const dialogTriggers = document.querySelectorAll<HTMLButtonElement>('button[data-opens="search-dialog"]')

  const focusTrap = createFocusTrap(searchDialog.querySelector<HTMLElement>('[data-trap-root]')!, {
    onActivate() {
      lockBodyScroll()
      animate(searchDialog, { opacity: [0, 1] })
    },
    onDeactivate() {
      animate(searchDialog, { opacity: [1, 0] }).finished.then(() => {
        searchDialog.dataset.open = 'false'
        unlockBodyScroll()
      })
    },
    clickOutsideDeactivates: true,
  })

  dialogTriggers.forEach((btn) => {
    btn.addEventListener('click', () => {
      /* 
      we have to remove display:none from this element
      so focustrap can find focusable elements
      */
      searchDialog.dataset.open = 'true'
      focusTrap.activate()
    })
  })

  searchDialog.querySelectorAll<HTMLButtonElement>('button[type="reset"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      focusTrap.deactivate()
    })
  })

  const activate = () => {
    searchDialog.dataset.open = 'true'
    focusTrap.activate()
  }

  const deactivate = () => {
    focusTrap.deactivate()
  }

  if (searchDialog.dataset.open === 'true') {
    activate()
  }

  return { activate, deactivate, searchDialog, dialogTriggers }
}
