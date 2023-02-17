import { type NextPage } from "next";
import Title from "../components/head/Title";
import Hero from "../components/landing/Hero";
import Navbar from "../components/landing/Navbar";
import Quote from "../components/landing/Quote";
import Usage from "../components/landing/Usage";
import Demo from "../components/landing/Demo";
import Sponsor from "../components/landing/Sponsor";

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
          <Usage />
        </section>
        <section>
          <Demo />
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
