/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Link from "next/link";
import useSWR from "swr";

interface BaseButtonProps {
  text: string;
  title: string;
}
interface BaseButtonProps1 {
  text: string;
  title: string;
  stars: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const SponsorButton1: React.FC<BaseButtonProps1> = ({ text, title, stars }) => {
  return (
    <button
      className="h-[100%] rounded-3xl border-2 border-dark bg-[#5B21B6] px-12 text-5xl text-white transition-all hover:invert-[0.2] -sm:mt-8  -sm:h-24"
      title={title}
    >
      <img src={"/star.svg"} className="inline h-12 pr-4 align-bottom" />
      {stars} {text}
    </button>
  );
};

const SponsorButton2: React.FC<BaseButtonProps> = ({ text, title }) => {
  return (
    <button
      className="h-28 rounded-3xl border-2 border-dark bg-[#F472B6] py-4 px-12 text-5xl text-white transition-all hover:bg-[#e6499a]"
      title={title}
    >
      <img src={"/heart.svg"} className="inline h-12 pr-4 align-bottom" />
      {text}
    </button>
  );
};

export default function Sponsor() {
  // get stars from file called stars.json
  const { data, error } = useSWR(
    "https://api.github.com/repos/UwULang/uwulang",
    fetcher
  );

  return (
    <div
      className="abstract_background m-auto bg-dark p-32 pb-16 text-8xl text-white -lg:text-6xl -md:p-4 -md:pt-16"
      id="contribute"
    >
      <div className="m-auto max-w-4xl">
        <h2 className="pb-16 text-center">
          Contr
          <wbr />
          ibute now
        </h2>

        <div className="m-auto flex justify-center text-center -sm:flex-col">
          <Link href="https://github.com/UwULang" target="_blank">
            <img
              alt="GitHub logo"
              title="GitHub"
              src={"/github.svg"}
              className="mr-4 inline h-24 hover:animate-pulse -lg:inline-grid -lg:pl-0 -sm:h-24"
            />
          </Link>
          <Link href="https://github.com/UwULang/uwulang" target="_blank">
            <SponsorButton1
              text="Stars"
              title="UwULang GitHub Repo"
              stars={data?.stargazers_count}
            />
          </Link>
        </div>
        <div className="m-auto flex justify-center pt-16 text-center">
          <Link href="https://github.com/UwULang/uwulang" target="_blank">
            <SponsorButton2 text="Sponsor" title="Sponsor UwULang" />
          </Link>
        </div>
        {/* <div className="m-auto flex justify-center pt-16 text-center">
          <Link
            href="https://github.com/UwULang/uwulang/releases"
            target="_blank"
          >
            <SponsorButton2 text="Download" title="Download UwULang" />
          </Link>
        </div> */}
        <br />
      </div>
    </div>
  );
}
