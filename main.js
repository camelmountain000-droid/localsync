import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { IndexeddbPersistence } from 'y-indexeddb'

const room = new URLSearchParams(location.search).get('room') || 'localsync-demo'
const doc = new Y.Doc()
new IndexeddbPersistence(room, doc)
new WebrtcProvider(room, doc)
const ytext = doc.getText('note')
const box = document.getElementById('note')
let last = ''

ytext.observe(() => {
  const pos = box.selectionStart
  box.value = ytext.toString()
  box.setSelectionRange(pos, pos)
  last = box.value
})

box.addEventListener('input', () => {
  const next = box.value
  let s = 0
  while (s < last.length && s < next.length && last[s] === next[s]) s++
  let a = last.length, b = next.length
  while (a > s && b > s && last[a - 1] === next[b - 1]) { a--; b-- }
  doc.transact(() => {
    ytext.delete(s, a - s)
    ytext.insert(s, next.slice(s, b))
  })
  last = next
})
