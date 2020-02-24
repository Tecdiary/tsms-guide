/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ceba597ccd7c6986294720672bab6db5"
  },
  {
    "url": "assets/css/0.styles.032ddd1c.css",
    "revision": "a51f148fb0572fbed6df4648f6e96966"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7660a638.js",
    "revision": "8f160f547aa994fa8a395a5321295d0c"
  },
  {
    "url": "assets/js/11.07fa3656.js",
    "revision": "5699328337efcadbea5c2c5e231740a3"
  },
  {
    "url": "assets/js/12.322306af.js",
    "revision": "91931fb9db4d4935c25c71a08478ba93"
  },
  {
    "url": "assets/js/13.2606b9c3.js",
    "revision": "8aede2974602e716657cd757ee29df2c"
  },
  {
    "url": "assets/js/14.ff7f642e.js",
    "revision": "f42fe384562730845da477656a98bd61"
  },
  {
    "url": "assets/js/15.beeb7e69.js",
    "revision": "2f16e98e19f4b52079f398ce1fe7faca"
  },
  {
    "url": "assets/js/16.afa4ce28.js",
    "revision": "ad7ee77121430a8f2e62d807aabf9f9a"
  },
  {
    "url": "assets/js/17.e567bcae.js",
    "revision": "68b4f250e5e3bccf5a98dcdc4b77fd82"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.b0e05693.js",
    "revision": "16bb5eeb4e4349a3b511a62ee3b41c76"
  },
  {
    "url": "assets/js/4.b9f4e17f.js",
    "revision": "9d29f10d56e2dff49ecfb5726d173b37"
  },
  {
    "url": "assets/js/5.f372f2b9.js",
    "revision": "925761c6b4ac0a5915d02a1fc6bc71c1"
  },
  {
    "url": "assets/js/6.23d7781b.js",
    "revision": "1015279193b60a0b78927a46fb5b44c8"
  },
  {
    "url": "assets/js/7.ebb8ba40.js",
    "revision": "bfbfd0f3447af67746396e453f15ad77"
  },
  {
    "url": "assets/js/8.49a4a176.js",
    "revision": "e3b3cf6b871e27f18fe6b596033a6d1f"
  },
  {
    "url": "assets/js/9.2d000b4d.js",
    "revision": "6e8f01d1f01e60c08d0447b2578cf686"
  },
  {
    "url": "assets/js/app.de3c654e.js",
    "revision": "9150fe2209adf4da1632d1d8f7eccfe6"
  },
  {
    "url": "changelog.html",
    "revision": "99e33c7c4859313105432d8ca6a212c7"
  },
  {
    "url": "index.html",
    "revision": "c7d0bbb18b729b92008a838980d87e9a"
  },
  {
    "url": "v1/credit/index.html",
    "revision": "1d50256d7bf72d41a3496f26c6ad1a62"
  },
  {
    "url": "v1/developer-guide/index.html",
    "revision": "c4a338e8d57ed53cd0a0e6c208cd9527"
  },
  {
    "url": "v1/faqs/index.html",
    "revision": "d82260939eb4ffa7e37b5bc7e7664fab"
  },
  {
    "url": "v1/guide/accounts-transfers.html",
    "revision": "29eb27aa560581624c9d5594d93a2005"
  },
  {
    "url": "v1/guide/expenses-incomes.html",
    "revision": "072462d3fae2ed08c3bcce9abbf6e057"
  },
  {
    "url": "v1/guide/index.html",
    "revision": "54620e996ff5c0a204f4d4c4e2495141"
  },
  {
    "url": "v1/guide/invoices-purchases.html",
    "revision": "ebb6d62e0dc10ecb419cb4984483280d"
  },
  {
    "url": "v1/guide/products-customers-vendors.html",
    "revision": "1c086cb6777dd8a9226a9ea2c6ff7bd6"
  },
  {
    "url": "v1/guide/users-settings.html",
    "revision": "cc16ba9d85b42dbc55756c74a0fe665b"
  },
  {
    "url": "v1/install/index.html",
    "revision": "41e01cab561edb5b36e2ee78f79fd13b"
  },
  {
    "url": "v1/install/service.html",
    "revision": "47337466f7a7ed0b9ba753ee0b6ecd42"
  },
  {
    "url": "v1/update/index.html",
    "revision": "1fa9c4c701e97edcaed80db50fd842ef"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
