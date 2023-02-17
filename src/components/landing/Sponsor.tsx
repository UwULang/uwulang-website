import Link from "next/link";

interface BaseButtonProps {
  text: string;
}

const stars = 6;

const SponsorButton1: React.FC<BaseButtonProps> = ({ text }) => {
  return (
    <button className="rounded-md border-2 border-dark bg-button px-8 text-3xl text-white transition-all hover:animate-pulse">
      {stars} {text}
    </button>
  );
};

export default function Sponsor() {
  return (
    <div
      className="m-auto  bg-dark p-32 text-8xl text-white -lg:text-6xl"
      id="contribute"
    >
      <div className="m-auto max-w-4xl">
        <h2 className="pb-16 text-center">Contribute now</h2>

        <div className="m-auto flex justify-center text-center">
          <Link href="https://github.com/UwULang/uwulang" target="_blank">
            <img
              alt="UwULang GitHub"
              title="UwULang GitHub Repo"
              src={"/stars.svg"}
              className="inline h-24 hover:animate-pulse"
            />
          </Link>
          <Link href="https://github.com/UwULang" target="_blank">
            <img
              alt="GitHub logo"
              title="GitHub"
              src={"/github.svg"}
              className="inline h-24 pl-16 -lg:inline-grid -lg:pl-0"
            />
          </Link>
        </div>
        <div className="m-auto flex justify-center pt-16 text-center">
          <Link href="https://github.com/UwULang/uwulang" target="_blank">
            <img
              alt="Sponsor UwULang"
              title="Sponsor UwULang"
              src={"/sponsor.svg"}
              className="inline h-24 hover:animate-pulse"
            />
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
}
