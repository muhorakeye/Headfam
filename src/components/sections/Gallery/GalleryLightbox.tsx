import { useEffect } from 'react'
import type { GalleryImage } from './galleryData'

interface GalleryLightboxProps {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function GalleryLightbox({ images, currentIndex, onClose, onPrev, onNext }: GalleryLightboxProps) {
  const image = images[currentIndex]
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < images.length - 1

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.93)' }}
      onClick={onClose}
    >
      {/* Image wrapper — stops click from reaching the backdrop */}
      <div
        className="relative w-full max-w-5xl mx-6 flex items-center justify-center"
        style={{ maxHeight: '88vh' }}
        onClick={e => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
        />

        {/* Counter */}
        <span
          className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-xs"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Close */}
      <button
        className="absolute top-5 right-6 font-body text-2xl leading-none transition-colors duration-200"
        style={{ color: 'rgba(255,255,255,0.6)' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white text-2xl transition-colors duration-200"
          style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
          onClick={e => { e.stopPropagation(); onPrev() }}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white text-2xl transition-colors duration-200"
          style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
          onClick={e => { e.stopPropagation(); onNext() }}
          aria-label="Next image"
        >
          ›
        </button>
      )}
    </div>
  )
}
