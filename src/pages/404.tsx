import { type NextPage } from "next";
import Title from "../components/head/Title";
import Navbar from "../components/common/Navbar";
import Hero from "../components/landing/Hero";
import Button from "../components/common/Button";

const NotFound: NextPage = () => {
  return (
    <>
      <Title title="Not Found" />
      <Navbar />
      <main className="overflow-hidden">
        <div className="absolute z-10 flex h-screen w-screen text-5xl">
          {/* glass block */}
          <div className="mx-[20vw] my-[30vh] flex w-full flex-col items-center justify-center rounded-xl bg-white/70 p-32 shadow-2xl backdrop-blur-md backdrop-filter">
            <h1 className="text-center font-semibold text-dark">
              UwU not Found 🥺
            </h1>
            <br />
            <Button text="Back" link="/" />
          </div>
        </div>
        <section>
          <Hero />
        </section>
      </main>
    </>
  );
};

export default NotFound;
