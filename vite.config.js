import posthtml from '@vituum/vite-plugin-posthtml'
import posthtmlExpressions from 'posthtml-expressions'

export default {
  plugins: [
    posthtml({
      plugins: [posthtmlExpressions({ removeScriptLocals: true })],
    }),
  ],
}
