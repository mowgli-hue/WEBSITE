import { AIDemoSection } from "./components/AIDemoSection";
import { BlockchainShowcase } from "./components/BlockchainShowcase";
import { BrandBanner } from "./components/BrandBanner";
import { BuiltForScale } from "./components/BuiltForScale";
import { ContactCTA } from "./components/ContactCTA";
import { EcosystemSection } from "./components/EcosystemSection";
import { FAQSection } from "./components/FAQSection";
import { HeroSection } from "./components/HeroSection";
import { HowWeWork } from "./components/HowWeWork";
import { LeadIntentSection } from "./components/LeadIntentSection";
import { MarqueeBand } from "./components/MarqueeBand";
import { MobileFirstShowcase } from "./components/MobileFirstShowcase";
import { Navbar } from "./components/Navbar";
import { OurTeam } from "./components/OurTeam";
import { ProductsSection } from "./components/ProductsSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { ScrollProgress } from "./components/ScrollProgress";
import { ServicesSection } from "./components/ServicesSection";
import { SeoKeywordSection } from "./components/SeoKeywordSection";
import { SiteFooter } from "./components/SiteFooter";
import { StorySection } from "./components/StorySection";
import { SystemsSection } from "./components/SystemsSection";
import { TechOrbit } from "./components/TechOrbit";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TodaysPlan } from "./components/TodaysPlan";
import { ChatbotFab } from "./components/ChatbotFab";
import { LearnFrenchPromoSection } from "./components/LearnFrenchPromoSection";

import {
  localBusinessSchema,
  homepageFAQSchema,
  reviewSchemas,
  websiteSchema,
  breadcrumbSchema
} from "./lib/schemas";

export default function HomePage() {
  const breadcrumbs = breadcrumbSchema([{ name: "Home", href: "/" }]);

  return (
    <main id="main-content">
      {/* SEO structured data — all schemas grouped at top */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {reviewSchemas.map((schema, i) => (
        <script key={`review-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <BuiltForScale />
      <MarqueeBand />
      <HowWeWork />
      <BlockchainShowcase />
      <TechOrbit />
      <LeadIntentSection />
      <StorySection />
      <BrandBanner />
      <ProductsSection />
      <ServicesSection />
      <MobileFirstShowcase />
      <TestimonialsSection />
      <OurTeam />
      <SeoKeywordSection />
      <EcosystemSection />
      <SystemsSection />
      <RoadmapSection />
      <FAQSection />
      <TodaysPlan />
      <LearnFrenchPromoSection />
      <AIDemoSection />
      <ContactCTA />
      <SiteFooter />
      <ChatbotFab />
    </main>
  );
}
