import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import SocialSection from "@/components/social-section";
import DownloadSection from "@/components/download-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SocialSection />
      <DownloadSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
