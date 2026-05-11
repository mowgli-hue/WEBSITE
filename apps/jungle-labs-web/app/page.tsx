import { AIDemoSection } from "./components/AIDemoSection";
import { BlockchainShowcase } from "./components/BlockchainShowcase";
import { ContactCTA } from "./components/ContactCTA";
import { EcosystemSection } from "./components/EcosystemSection";
import { HeroSection } from "./components/HeroSection";
import { HowWeWork } from "./components/HowWeWork";
import { LeadIntentSection } from "./components/LeadIntentSection";
import { MarqueeBand } from "./components/MarqueeBand";
import { MotionRibbon } from "./components/MotionRibbon";
import { Navbar } from "./components/Navbar";
import { OurTeam } from "./components/OurTeam";
import { ProductsSection } from "./components/ProductsSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { ScrollProgress } from "./components/ScrollProgress";
import { ServicesSection } from "./components/ServicesSection";
import { SeoKeywordSection } from "./components/SeoKeywordSection";
import { SiteFooter } from "./components/SiteFooter";
import { SocialProofBanner } from "./components/SocialProofBanner";
import { StorySection } from "./components/StorySection";
import { SystemsSection } from "./components/SystemsSection";
import { TechOrbit } from "./components/TechOrbit";
import { TodaysPlan } from "./components/TodaysPlan";
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
    "Blockchain Development",
    "Tokenization Platforms",
    "Smart Contracts",
    "Web3 Integration",
    "Custom CRM Systems",
    "Software Development",
    "Analytics Platforms",
    "Business Workflow Automation",
    "Restaurant Technology",
    "Kitchen Display Systems",
    "French Language Learning Apps"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Jungle Labs Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Franco App", url: "https://www.junglelabsworld.ca" } },
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Tokenization Engine", url: "https://www.junglelabsworld.ca#blockchain" } },
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Smart Contract Studio", url: "https://www.junglelabsworld.ca#blockchain" } },
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Jungle Table Ordering OS", url: "https://www.junglelabsworld.ca/jungle-table-ordering" } }
    ]
  }
};

export default function HomePage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <MotionRibbon />
      <SocialProofBanner />
      <MarqueeBand />
      <HowWeWork />
      <BlockchainShowcase />
      <TechOrbit />
      <LeadIntentSection />
      <StorySection />
      <ProductsSection />
      <ServicesSection />
      <OurTeam />
      <SeoKeywordSection />
      <EcosystemSection />
      <SystemsSection />
      <RoadmapSection />
      <TodaysPlan />
      <LearnFrenchPromoSection />
      <AIDemoSection />
      <ContactCTA />
      <SiteFooter />
      <ChatbotFab />
    </main>
  );
}
