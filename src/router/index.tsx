// All application routes defined in one place
// TODO: [Phase 2] add protected routes for admin dashboard
import { createBrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/layout';
import { Footer } from '../components/layout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { CommunityPage } from '../pages/CommunityPage';
import { ServicesPage } from '../pages/ServicesPage';
import { ServiceDetailPage } from '../pages/ServiceDetailPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { ProjectDetailPage } from '../pages/ProjectDetailPage';
import Donate from '../pages/Donate';
import { BookingPage } from '../pages/BookingPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { WhoWeAre } from '../pages/about/WhoWeAre';
import { OurProfile } from '../pages/about/OurProfile';
import { OurTeam } from '../pages/about/OurTeam';
import { OurPolicy } from '../pages/about/OurPolicy';
import Consultancy from '../pages/services/Consultancy';
import EcoConstruction from '../pages/services/EcoConstruction';
import ArchitectureDesign from '../pages/services/ArchitectureDesign';
import BookConsultation from '../pages/BookConsultation';
import KinigiWomensVillage from '../pages/projects/KinigiWomensVillage';
import MasakaSweetApartment from '../pages/projects/MasakaSweetApartment';
import NobleCheerResort from '../pages/projects/NobleCheerResort';
import BambinoSuperCity from '../pages/projects/BambinoSuperCity';
import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/about/who-we-are', element: <WhoWeAre /> },
      { path: '/about/our-profile', element: <OurProfile /> },
      { path: '/about/our-team', element: <OurTeam /> },
      { path: '/about/our-policy', element: <OurPolicy /> },
      { path: '/community', element: <CommunityPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/services/consultancy', element: <Consultancy /> },
      { path: '/services/eco-construction', element: <EcoConstruction /> },
      { path: '/services/architecture-design', element: <ArchitectureDesign /> },
      { path: '/services/:serviceId', element: <ServiceDetailPage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/projects/kinigi-womens-village', element: <KinigiWomensVillage /> },
      { path: '/projects/masaka-sweet-apartment', element: <MasakaSweetApartment /> },
      { path: '/projects/noble-cheer-resort', element: <NobleCheerResort /> },
      { path: '/projects/bambino-super-city', element: <BambinoSuperCity /> },
      { path: '/projects/:projectId', element: <ProjectDetailPage /> },
      { path: '/donate', element: <Donate /> },
      { path: '/booking', element: <BookingPage /> },
      { path: '/book-consultation', element: <BookConsultation /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
