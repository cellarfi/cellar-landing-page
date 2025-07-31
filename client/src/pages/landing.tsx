import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import RewardsSection from "@/components/rewards-section";
import SocialSection from "@/components/social-section";
import NativeAppSection from "@/components/native-app-section";
import DownloadSection from "@/components/download-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <RewardsSection />
      <SocialSection />
      <NativeAppSection />
      <DownloadSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
