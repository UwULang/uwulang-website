export default function Usage() {
  return (
    <div className="m-auto max-w-4xl p-32 pt-16  pb-0 text-8xl text-dark -lg:text-6xl -md:p-4">
      <h2 className="pb-16 text-center">Used by</h2>

      <div>
        <img
          alt="PenguinLabs logo"
          title="PenguinLabs"
          src={"/labs.png"}
          className="inline h-32"
        />
        <img
          alt="Antarctic Solutions logo"
          title="Antarctic Solutions"
          src={"/as.png"}
          className="m-auto inline h-16 -sm:block"
        />
      </div>
      <br />
    </div>
  );
}
