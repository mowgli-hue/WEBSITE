import { AIDemoSection } from "./components/AIDemoSection";
import { ContactCTA } from "./components/ContactCTA";
import { EcosystemSection } from "./components/EcosystemSection";
import { LeadIntentSection } from "./components/LeadIntentSection";
import { HeroSection } from "./components/HeroSection";
import { MotionRibbon } from "./components/MotionRibbon";
import { Navbar } from "./components/Navbar";
import { ProductsSection } from "./components/ProductsSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { ServicesSection } from "./components/ServicesSection";
import { SeoKeywordSection } from "./components/SeoKeywordSection";
import { SiteFooter } from "./components/SiteFooter";
import { SocialProofBanner } from "./components/SocialProofBanner";
import { StorySection } from "./components/StorySection";
import { SystemsSection } from "./components/SystemsSection";
import { ChatbotFab } from "./components/ChatbotFab";
import { LearnFrenchPromoSection } from "./components/LearnFrenchPromoSection";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jungle Labs",
  url: "https://www.junglelabsworld.ca",
  email: "admin@junglelabsworld.com",
  telephone: "+1-604-902-8699",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9850 King George Blvd",
    addressLocality: "Surrey",
    addressRegion: "BC",
    postalCode: "V3T 0P9",
    addressCountry: "CA"
  },
  sameAs: [
    "https://www.linkedin.com/company/jungle-labs-world",
    "https://www.instagram.com/junglelabsworld/",
    "https://www.facebook.com/junglelabsworld/"
  ],
  knowsAbout: [
    "AI Automation",
    "Custom CRM Systems",
    "Software Development",
    "Analytics Platforms",
    "Business Workflow Automation",
    "Workout Tracking Apps",
    "Fitness Technology",
    "Immigration Consulting Technology",
    "Express Entry Canada",
    "Restaurant Technology",
    "Kitchen Display Systems",
    "French Language Learning Apps"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Jungle Labs Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Franco App", url: "https://www.junglelabsworld.ca" } },
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "RepTrack", url: "https://www.junglelabsworld.ca/reptrack" } },
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Immigration Platform", url: "https://www.junglelabsworld.ca/immigration-platform" } },
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Jungle Table Ordering OS", url: "https://www.junglelabsworld.ca/jungle-table-ordering" } }
    ]
  }
};

export default function HomePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Navbar />
      <HeroSection />
      <MotionRibbon />
      <SocialProofBanner />
      <LeadIntentSection />
      <StorySection />
      <ProductsSection />
      <ServicesSection />
      <SeoKeywordSection />
      <EcosystemSection />
      <SystemsSection />
      <RoadmapSection />
      <LearnFrenchPromoSection />
      <AIDemoSection />
      <ContactCTA />
      <SiteFooter />
      <ChatbotFab />
    </main>
  );
}
