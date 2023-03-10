import { type NextPage } from "next";
import Title from "../components/head/Title";
// import Hero from "../components/landing/Hero";
import Navbar from "../components/common/Navbar";
import Quote from "../components/landing/Quote";
import Usage from "../components/landing/Usage";
import Demo from "../components/landing/Demo";
import Sponsor from "../components/landing/Sponsor";
import dynamic from "next/dynamic";

// import Hero lazy
const Hero = dynamic(() => import("../components/landing/Hero"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Title title="UwULang" />
      <Navbar />
      <main className="overflow-hidden">
        <section>
          <Hero />
        </section>
        <h1 className="hidden">UwULang</h1>
        <div className="h-screen" /> {/* spacer */}
        <section>
          <Quote />
        </section>
        <section>
          <Demo />
        </section>
        <div className="m-auto w-[50%] -md:pt-16">
          <hr className="border-dark/65 border-t-[3px]" />
        </div>
        <section>
          <Usage />
        </section>
        <section>
          <Sponsor />
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
