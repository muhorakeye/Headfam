import { PageHero } from '../components/layout'
import { GalleryGrid } from '../components/sections/Gallery/GalleryGrid'

export function GalleryPage() {
  return (
    <main>
      <PageHero
        title="Our Gallery"
        subtitle="Every structure HeadFam Africa builds carries a story. Browse our full collection of project photography and design renders."
      />
      <GalleryGrid />
    </main>
  )
}
