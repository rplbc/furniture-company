export const initHeader = () => {
  const burger = document.querySelector<HTMLButtonElement>('button[data-el="burger"]')!
  let isBurgerExpanded = false

  const toggleBurger = () => {
    isBurgerExpanded = !isBurgerExpanded
    burger.setAttribute('aria-expanded', `${isBurgerExpanded}`)
  }

  burger.addEventListener('click', toggleBurger)

  return toggleBurger
}
