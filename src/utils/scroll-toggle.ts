export const lockBodyScroll = () => {
  document.body.classList.add('overflow-hidden')
}

export const unlockBodyScroll = () => {
  document.body.classList.remove('overflow-hidden')
}
