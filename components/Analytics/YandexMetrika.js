// app/components/Analytics/YandexMetrika.jsx
'use client'
import Script from 'next/script'
import { useMemo } from 'react'

export default function YandexMetrika() {
  const isIOS = useMemo(() => {
    if (typeof navigator === 'undefined') return false
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
  }, [])

  // webvisor выключаем только на iOS
  const init = `
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(99037462,"init",{
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:${isIOS ? 'false' : 'true'}
    });
  `

  return <Script id="ym-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: init }} />
}
