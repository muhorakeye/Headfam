import { useState } from 'react'
import { motion } from 'framer-motion'
import { GalleryLightbox } from './GalleryLightbox'
import { CATEGORY_MAP, type GalleryCategory } from './galleryData'

const TABS: { label: string; value: GalleryCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Kinigi Women Village', value: 'kwv' },
  { label: 'Masaka Sweet Apartment', value: 'msa' },
  { label: 'Noble Cheer Resort', value: 'ncr' },
  { label: 'Bambino Super City', value: 'bsc' },
  { label: 'Architecture & Design', value: 'design' },
]

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const images = CATEGORY_MAP[active]

  function handleTabChange(value: GalleryCategory) {
    setActive(value)
    setLightboxIndex(null)
  }

  return (
    <section className="py-16 bg-stone">
      <div className="max-w-7xl mx-auto px-6">

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {TABS.map(tab => (
            <button
              key={tab.value}
              onClick={() => handleTabChange(tab.value)}
              className={`font-body text-sm font-semibold px-5 py-2 rounded-full border transition-colors duration-200 ${
                active === tab.value
                  ? 'bg-forest text-white border-forest'
                  : 'bg-white text-charcoal border-transparent hover:bg-forest-light hover:text-forest'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image count */}
        <p className="font-mono text-xs text-muted text-center tracking-widest uppercase mb-10">
          {images.length} {images.length === 1 ? 'photo' : 'photos'}
        </p>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={`${active}-${i}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.5) }}
              className="break-inside-avoid mb-3 cursor-pointer group relative overflow-hidden rounded-lg"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                onError={e => { e.currentTarget.style.minHeight = '120px'; e.currentTarget.style.backgroundColor = '#1a6b2f' }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-2xl">
                  +
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(prev => (prev !== null ? Math.max(0, prev - 1) : 0))}
          onNext={() => setLightboxIndex(prev => (prev !== null ? Math.min(images.length - 1, prev + 1) : 0))}
        />
      )}
    </section>
  )
}
