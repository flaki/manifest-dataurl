console.log('Service Worker started...')

self.addEventListener('fetch', event => {
  const req = event.request
  const url = new URL(req.url)
})
