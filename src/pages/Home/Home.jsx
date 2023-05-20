import { Hero, Footer } from "../../components";

import { Features } from "./components/Features";
import { WhyUs } from "./components/WhyUs";
import { Testimonial } from "./components/Testimonial";
import { Cta } from "./components/Cta";
import { Faq } from "./components/Faq";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";

export const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="pb-5">
      <Hero showSidebar={() => setShowSidebar(true)} />

      {/* // halaman cari
      <SearchForm mode="searching" onSubmit={() => Navigate(`jdjksfdjfk?name=&kategori=....`)} />

      // halaman result
      <SearchForm mode="edit" onSubmit={() => fetchCar()} /> */}
      <Features />
      <WhyUs />
      <Testimonial />
      <Cta />
      <Faq />
      <Footer />
      <Sidebar show={showSidebar} handleClose={() => setShowSidebar(false)} />
    </div>
  );
};
