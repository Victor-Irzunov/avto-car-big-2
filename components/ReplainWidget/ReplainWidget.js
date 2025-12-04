"use client";
import { useEffect } from 'react';

export default function ReplainWidget() {
  useEffect(() => {
    window.replainSettings = { id: '55a982d1-fc57-4a0d-90f8-2e12084ab9ba' };
    setTimeout(() => {
      (function (u) {
        var s = document.createElement('script');
        s.async = true;
        s.src = u;
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      })('https://widget.replain.cc/dist/client.js');
    }, 5000);
  }, []);

  return null;
}

