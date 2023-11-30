import { animate } from 'motion'
import { createFocusTrap } from 'focus-trap'
import { lockBodyScroll, unlockBodyScroll } from '../../utils/scroll-toggle'

const initSearch = () => {
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

  const activate = () => {
    searchDialog.dataset.open = 'true'
    return focusTrap.activate()
  }

  const deactivate = () => focusTrap.deactivate()

  dialogTriggers.forEach((btn) => {
    btn.addEventListener('click', activate)
  })

  searchDialog.querySelectorAll<HTMLButtonElement>('button[type="reset"]').forEach((btn) => {
    btn.addEventListener('click', deactivate)
  })

  if (searchDialog.dataset.open === 'true') activate()

  return { activate, deactivate, searchDialog, dialogTriggers }
}

export const searchModalController = initSearch()
