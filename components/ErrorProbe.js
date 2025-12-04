'use client';
// components/ErrorProbe.js
import { useEffect } from 'react';

export default function ErrorProbe() {
  useEffect(() => {
    function send(payload) {
      fetch('/api/client-error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    }

    function onErr(e) {
      send({
        type: 'error',
        msg: e.message,
        src: e.filename,
        line: e.lineno,
        col: e.colno,
      });
    }

    function onRej(e) {
      send({
        type: 'unhandledrejection',
        reason: String(e.reason),
      });
    }

    window.addEventListener('error', onErr);
    window.addEventListener('unhandledrejection', onRej);
    return () => {
      window.removeEventListener('error', onErr);
      window.removeEventListener('unhandledrejection', onRej);
    };
  }, []);

  return null;
}
