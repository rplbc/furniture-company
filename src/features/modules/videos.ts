import { animate, inView } from 'motion'

export const initVideos = () => {
  document.querySelectorAll<HTMLVideoElement>('video[data-inview="autoplay"]').forEach((vid) => {
    vid.addEventListener('play', () => {
      animate(vid, { opacity: [0, 1] }, { duration: 0.8 })
    })

    inView(vid, () => {
      vid.play()
      vid.autoplay = true
    })
  })
}
