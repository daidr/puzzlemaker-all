let cacheFiles = [
    './js/jquery-3.2.1.min.js',
    './js/LibsLoader.min.js',
    './',
    './index.html',
    './iconfont/material-icons.css',
    './iconfont/MaterialIcons-Regular.woff2',
    './iconfont/MaterialIcons-Regular.svg',
    './iconfont/MaterialIcons-Regular.woff',
    './iconfont/MaterialIcons-Regular.ttf',
    './iconfont/MaterialIcons-Regular.eot',
    './iconfont/MaterialIcons-Regular.ijmap',
    './media/index.html',
    './media/logo.svg',
    './media/headerSVG.svg',
    './media/headerMenu.svg',
    './media/1x1.gif',
    './media/click.mp3',
    './media/click.ogg',
    './media/click.wav',
    './media/delete.mp3',
    './media/delete.ogg',
    './media/delete.wav',
    './media/disconnect.mp3',
    './media/disconnect.ogg',
    './media/disconnect.wav',
    './media/handclosed.cur',
    './media/handdelete.cur',
    './media/handopen.cur',
    './media/headerMenuBtn.svg',
    './media/loading.svg',
    './media/logo_console.svg',
    './media/quote0.png',
    './media/quote1.png',
    './media/sprites.png',
    './media/sprites.svg',
    './sounds/sound1.ogg',
    './sounds/sound2.ogg',
    './sounds/sound3.ogg',
    './sounds/sound4.ogg',
    './sounds/sound5.ogg',
    './sounds/sound6.ogg',
    './favicon.ico',
    './blocks/blocks.xml',
]
let __version__ = 'cache-v20200418.0002'
// 文件缓存
self.addEventListener('install', e => {
    // 强制更新sw
    self.skipWaiting()
    e.waitUntil(
        caches.open(__version__).then(cache => {
            return cache.addAll(cacheFiles)
        })
    )
})
// 缓存更新
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== __version__) {
                        return caches.delete(cacheName)
                    }
                })
            )
        })
    )
})
// 请求代理
self.addEventListener('fetch', function (event) {
    if (event.request.url.match('blocks') && !event.request.url.match('xml')) {
        event.request.url = event.request.url.replace(/\?t=\d{13}/, "");
    }
    console.log('Handling fetch event for', event.request.url)
    if (event.request.url.match('css') || (event.request.url.match('blocks') && !event.request.url.match('xml')) || (event.request.url.match('js') && !event.request.url.match('jquery-3.2.1') && !event.request.url.match('LibsLoader'))) return
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                console.log('Found response in cache:', response)

                return response
            }
            console.log('No response found in cache. About to fetch from network...', caches)

            return fetch(event.request).then(function (response) {
                console.log('Response from network is:', response)
                caches.open(__version__).then(function (cache) {
                    cache.put(event.request, response)
                    return response
                })
            }).catch(function (error) {
                console.error('Fetching failed:', error)

                throw error
            })
        })
    )
})