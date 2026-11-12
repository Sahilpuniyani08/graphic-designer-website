import { Hero1 } from "@/components/sections/hero/hero1";
import { About } from "@/components/sections/about/about";
import { Work } from "@/components/sections/work/work";
import { Services } from "@/components/sections/services/services";
import { Testimonials } from "@/components/sections/testimonials/testimonials";
import { Footer } from "@/components/sections/footer/footer";
import { Navbar1 } from "@/components/layout/navbar1";

export default function Home() {
  return (
    <main>
      <Navbar1 />
      <Hero1 />
      <About />
      <Work />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
