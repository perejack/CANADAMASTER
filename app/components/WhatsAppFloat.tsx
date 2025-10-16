"use client"

import { useCallback } from "react"

// Minimal WhatsApp brand SVG (no extra deps)
function WhatsAppIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.04 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.86 11.86 0 0 0 5.78 1.48h.01c6.59 0 11.95-5.36 11.95-11.94 0-3.19-1.24-6.19-3.47-8.42ZM12.04 21.7h-.01a9.76 9.76 0 0 1-4.98-1.36l-.36-.21-3.71.97.99-3.62-.24-.37A9.77 9.77 0 0 1 2.34 11.95c0-5.36 4.36-9.72 9.72-9.72 2.6 0 5.04 1.01 6.88 2.85a9.62 9.62 0 0 1 2.85 6.87c0 5.36-4.36 9.72-9.75 9.75Z"/>
      <path d="M17.2 14.2c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.29-.74.9-.9 1.08-.17.18-.33.2-.61.07-.28-.14-1.19-.44-2.26-1.41-.83-.74-1.39-1.66-1.55-1.93-.16-.29-.02-.44.12-.58.12-.12.27-.31.4-.47.13-.16.17-.29.26-.48.08-.19.04-.36-.02-.5-.06-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.8 1.17 2.99.14.19 2.01 3.07 4.86 4.31.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.33.23-.66.23-1.22.16-1.33-.06-.11-.24-.18-.52-.31Z"/>
    </svg>
  )
}

export default function WhatsAppFloat() {
  const openWhatsApp = useCallback(() => {
    window.open("https://wa.me/254202100073", "_blank")
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Tooltip */}
      <div className="absolute -top-9 right-0 select-none">
        <div className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-emerald-600 shadow-md hidden sm:inline-block">
          Talk to us
        </div>
      </div>
      {/* Button */}
      <button
        aria-label="Chat with us on WhatsApp"
        onClick={openWhatsApp}
        className="group relative flex items-center gap-2 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 active:scale-95 transition-all duration-200 px-4 py-3"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity" />
        <div className="flex items-center justify-center rounded-full bg-white/10 p-1">
          <WhatsAppIcon className="w-6 h-6" />
        </div>
        <span className="hidden sm:inline text-sm font-semibold tracking-wide">WhatsApp</span>
        {/* Pulse ping */}
        <span className="absolute -right-1 -top-1 h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>
      </button>
    </div>
  )
}
