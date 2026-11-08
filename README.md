# localsync

Local-first sync with no accounts and no cloud. Edit offline on any device, and changes merge automatically when you reconnect.

Built with Yjs (CRDTs), WebRTC and IndexedDB.

## Run it

    npm install
    npx vite

Open http://localhost:5173 in two browser tabs and type in one. The other updates live, even with Wi-Fi off.

## Roadmap

- [x] Two-tab live sync
- [x] Offline persistence
- [ ] Serverless pairing (QR code / copy-paste)
- [ ] End-to-end encryption
- [ ] Clean `createSync()` library API
- [ ] Tests for offline conflicts
