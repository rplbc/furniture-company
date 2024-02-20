export const initHeader = () => {
  const burger = document.querySelector<HTMLButtonElement>('button[data-el="burger"]')!
  const isBurgerExpanded = () => burger.getAttribute('aria-expanded') === 'true'

  const toggleBurger = () => {
    if (isBurgerExpanded()) {
      burger.setAttribute('aria-expanded', 'false')
    } else {
      burger.setAttribute('aria-expanded', 'true')
    }
  }

  burger.addEventListener('click', toggleBurger)

  return toggleBurger
}
