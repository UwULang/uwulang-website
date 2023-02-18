import Button from "../common/Button";

export default function Demo() {
  return (
    <>
      <div
        className="abstract_background2 m-auto max-w-4xl p-32 pt-16 text-dark -md:p-4"
        id="demo"
      >
        <h2 className="pb-16 text-center text-8xl -lg:text-6xl">Try it here</h2>
        <div className="w-full rounded-xl bg-dark shadow-xl">
          <p className="animate-pulse py-36 text-center text-4xl text-white ">
            🚧
            <br />
            Under construction
            <br />
            🚧
          </p>
        </div>
        <div className="pt-8 text-center">
          <Button text="Run >>" />
        </div>
      </div>
    </>
  );
}
