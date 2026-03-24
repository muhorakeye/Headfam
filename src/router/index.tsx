// All application routes defined in one place
// TODO: [Phase 2] add protected routes for admin dashboard
import { lazy, Suspense, useEffect } from 'react';
import { createBrowserRouter, useLocation, Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout';
import { Footer } from '../components/layout';

// Route-level code splitting: each page loads only when its route is visited
const HomePage            = lazy(() => import('../pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage           = lazy(() => import('../pages/AboutPage').then(m => ({ default: m.AboutPage })));
const WhoWeAre            = lazy(() => import('../pages/about/WhoWeAre').then(m => ({ default: m.WhoWeAre })));
const OurProfile          = lazy(() => import('../pages/about/OurProfile').then(m => ({ default: m.OurProfile })));
const OurTeam             = lazy(() => import('../pages/about/OurTeam').then(m => ({ default: m.OurTeam })));
const OurPolicy           = lazy(() => import('../pages/about/OurPolicy').then(m => ({ default: m.OurPolicy })));
const CommunityPage       = lazy(() => import('../pages/CommunityPage').then(m => ({ default: m.CommunityPage })));
const ServicesPage        = lazy(() => import('../pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage   = lazy(() => import('../pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const EcoConstruction     = lazy(() => import('../pages/services/EcoConstruction'));
const ArchitectureDesign  = lazy(() => import('../pages/services/ArchitectureDesign'));
const Consultancy         = lazy(() => import('../pages/services/Consultancy'));
const ProjectsPage        = lazy(() => import('../pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage   = lazy(() => import('../pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const KinigiWomensVillage = lazy(() => import('../pages/projects/KinigiWomensVillage'));
const MasakaSweetApartment = lazy(() => import('../pages/projects/MasakaSweetApartment'));
const NobleCheerResort    = lazy(() => import('../pages/projects/NobleCheerResort'));
const BambinoSuperCity    = lazy(() => import('../pages/projects/BambinoSuperCity'));
const Donate              = lazy(() => import('../pages/Donate'));
const BookingPage         = lazy(() => import('../pages/BookingPage').then(m => ({ default: m.BookingPage })));
const BookConsultation    = lazy(() => import('../pages/BookConsultation'));
const ContactPage         = lazy(() => import('../pages/ContactPage').then(m => ({ default: m.ContactPage })));
const NotFoundPage        = lazy(() => import('../pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

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
      <Suspense fallback={<div className="min-h-screen bg-stone" />}>
        <Outlet />
      </Suspense>
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
