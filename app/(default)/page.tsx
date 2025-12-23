export const metadata = {
  title: "Verif Playground - AndGate Informatics",
  description: "VerifPlay is an innovative platform developed by AndGate Informatics, dedicated to accelerating functional verification across the ASIC and SoC design lifecycle.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
      <Workflows />
      <Cta />
    </>
  );
}
