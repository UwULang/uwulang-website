import { type NextPage } from "next";
import Title from "../components/head/Title";
import Hero from "../components/landing/Hero";
import Navbar from "../components/landing/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Title title="UwULang" />
      <Navbar />
      <main>
        <section>
          <Hero />
        </section>
        {/* <section>
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
        </section> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
