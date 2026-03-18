import { useEffect } from 'react';
import { WhoWeAreSection } from '../../components/sections/About';

export function WhoWeAre() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main>
      <WhoWeAreSection />
    </main>
  );
}
