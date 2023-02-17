export default function Usage() {
  return (
    <div className="m-auto max-w-4xl p-32 text-8xl text-dark">
      <h2 className="pb-16 text-center">Used by</h2>

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
        className="inline h-16"
      />
      <br />
    </div>
  );
}
