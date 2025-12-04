// app/components/Guards/IOSStabilityGuard.js
'use client'
import { useEffect } from 'react'
import useIsIOS from '../hooks/useIsIOS'

export default function IOSStabilityGuard({
  disableGTM = true,        // ← временно отключить GTM на iOS
  disableBitrixOnDetail = true // ← не грузить Bitrix на карточке авто
}) {
  const isIOS = useIsIOS()

  useEffect(() => {
    if (!isIOS) return

    // 1) Убираем GPU-тяжёлые фильтры, которые часто роняют WebKit
    const style = document.createElement('style')
    style.setAttribute('data-ios-guard', 'true')
    style.textContent = `
      * { -webkit-backdrop-filter:none!important; backdrop-filter:none!important; filter:none!important; }
      .shadow-xl,.shadow-2xl { box-shadow:none!important; }
      /* если есть фиксированные хедеры со стеклянным эффектом */
      .header-blur,.modal-backdrop { background: rgba(255,255,255,.85)!important; }
    `
    document.head.appendChild(style)

    // 2) По желанию — глушим GTM на iOS
    if (disableGTM) {
      const killGTM = () => {
        [...document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]')].forEach(s => s.remove())
        ;[...document.querySelectorAll('iframe')].filter(f => (f.src||'').includes('googletagmanager.com')).forEach(f => f.remove())
        // отключаем готовые dataLayer push до загрузки GTM
        window.dataLayer = window.dataLayer || []
      }
      killGTM()
      const mo = new MutationObserver(killGTM)
      mo.observe(document.documentElement, { childList: true, subtree: true })
      return () => mo.disconnect()
    }
  }, [isIOS, disableGTM])

  return null
}
