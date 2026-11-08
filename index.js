const Y = require('yjs')

const doc1 = new Y.Doc()
const doc2 = new Y.Doc()

doc1.getText('note').insert(0, 'Hello')
doc2.getText('note').insert(0, 'World')

Y.applyUpdate(doc2, Y.encodeStateAsUpdate(doc1))
Y.applyUpdate(doc1, Y.encodeStateAsUpdate(doc2))

console.log(doc1.getText('note').toString())
console.log(doc2.getText('note').toString())