import { useRef, useState } from "react";
import { useIntersection } from "react-use";

const msg_1 = "👇😒👇👇👇👉👆👈😡👉🥺👇👇😒👇👇👇👇👇";
const msg_2 = "👉👆👈😡👉🥺👉👇😒👇👇👇👉👆👈😡👉🥺👇";

export default function Quote() {
  const [scrolled1, setScrolled1] = useState(false);
  const quoteIntersectionRef = useRef(null);
  const quoteIntersection = useIntersection(quoteIntersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  if (
    quoteIntersection &&
    quoteIntersection.intersectionRatio > 0.75 &&
    !scrolled1
  )
    setScrolled1(true);

  return (
    <>
      <div
        className="quote__outline bg-dark p-32 text-8xl text-white -lg:p-16 -lg:text-6xl"
        id="quote"
      >
        <div
          className="m-auto flex max-w-4xl flex-col justify-center text-center font-light"
          ref={quoteIntersectionRef}
        >
          {/* float in from left or right on intersection */}
          <p
            className={`pb-20 text-left transition-all duration-700 ${
              scrolled1 ? "ml-0" : "ml-[-100vw]"
            }`}
          >
            The <em className="text-primary">#1 language</em>
          </p>
          <p
            className={`text-right transition-all duration-700 ${
              scrolled1 ? "mr-0" : "mr-[-100vw]"
            }`}
          >
            to get thingz done
          </p>
        </div>
      </div>
      <div className="banner_slanted relative flex overflow-x-hidden border-y-4 border-dark bg-primary">
        <div className="animate-marquee whitespace-nowrap py-6">
          {msg_1
            .split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/)
            .filter((value) => value !== "")
            .map((char, index) => {
              return (
                <span className="mx-4 text-4xl" key={`1-${index}`}>
                  {char}
                </span>
              );
            })}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-6">
          {msg_2
            .split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/)
            .filter((value) => value !== "")
            .map((char, index) => {
              return (
                <span className="mx-4 text-4xl" key={`2-${index}`}>
                  {char}
                </span>
              );
            })}
        </div>
      </div>
    </>
  );
}
