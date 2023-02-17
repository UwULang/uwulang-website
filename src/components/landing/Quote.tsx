const msg_1: string = "👇😒👇👇👇👉👆👈😡👉🥺👇👇😒👇👇👇👇";
const msg_2 = "👇👉👆👈😡👉🥺👉👇😒👇👇👇👉👆👈😡👉🥺";

export default function Quote() {
  return (
    <>
      <div
        className="quote__outline bg-dark p-32 text-8xl text-white -lg:p-16 -lg:text-6xl"
        id="quote"
      >
        <div className="m-auto flex max-w-4xl flex-col justify-center text-center font-light">
          <p className="pb-20 text-left">
            The <em className="text-primary">#1 language</em>
          </p>
          <p className="text-right">to get thingz done</p>
        </div>
      </div>
      <div className="banner_slanted relative flex overflow-x-hidden border-y-4 border-dark bg-primary">
        <div className="animate-marquee whitespace-nowrap py-6">
          {msg_1.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/).map((char) => {
            return <span className="mx-4 text-4xl">{char}</span>;
          })}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-6">
          {msg_2.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/).map((char) => {
            return <span className="mx-4 text-4xl">{char}</span>;
          })}
        </div>
      </div>
    </>
  );
}
