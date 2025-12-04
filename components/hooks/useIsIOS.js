// app/components/hooks/useIsIOS.js
'use client'
import { useEffect, useState } from 'react'
export default function useIsIOS() {
  const [isIOS, set] = useState(false)
  useEffect(() => { set(/iPad|iPhone|iPod/.test(navigator.userAgent)) }, [])
  return isIOS
}
