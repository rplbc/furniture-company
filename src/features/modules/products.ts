export const initProducts = () => {
  document.querySelectorAll<HTMLButtonElement>('button[data-favourite]').forEach((el) => {
    el.addEventListener('click', () => {
      const isSelected = el.dataset.selected === 'true'
      const label = el.querySelector('span.sr-only')

      el.dataset.selected = isSelected ? 'false' : 'true'

      if (label) label.textContent = isSelected ? 'Add to favourites' : 'Remove from favourites'
    })
  })
}
