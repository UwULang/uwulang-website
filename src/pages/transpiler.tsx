import { type NextPage } from "next";
import Title from "../components/head/Title";
import Navbar from "../components/common/Navbar";
import { useEffect, useState } from "react";
import Button from "../components/common/Button";

const sampleSets: any = {
  0: "",
  1: "++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.",
  2: "++++[>+++++<-]>[<+++++>-]+<+[>[>+>+<<-]++>>[<<+>>-]>>>[-]++>[-]+>>>+[[-]++++++>>>]<<<[[<++++++++<++>>-]+<.<[>----<-]<]<<[>>>>>[>>>[-]+++++++++<[>-<-]+++++++++>[-[<->-]+[<<<]]<[>+<-]>]<<-]<<-]",
  3: ">>>>++>+>++>+>>++<+[[>[>>[>>>>]<<<<[[>>>>+<<<<-]<<<<]>>>>>>]+<]>->>--[+[+++<<<<--]++>>>>--]+[>>>>]<<<<[<<+<+<]<<[>>>>>>[[<<<<+>>>>-]>>>>]<<<<<<<<[<<<<]>>-[<<+>>-]+<<[->>>>[-[+>>>>-]-<<-[>>>>-]++>>+[-<<<<+]+>>>>]<<<<[<<<<]]>[-[<+>-]]+<[->>>>[-[+>>>>-]-<<<-[>>>>-]++>>>+[-<<<<+]+>>>>]<<<<[<<<<]]<<]>>>+[>>>>]-[+<<<<--]++[<<<<]>>>+[>-[>>[--[++>>+>>--]-<[-[-[+++<<<<-]+>>>>-]]++>+[-<<<<+]++>>+>>]<<[>[<-<<<]+<]>->>>]+>[>>>>]-[+<<<<--]++<[[>>>>]<<<<[-[+>[<->-]++<[[>-<-]++[<<<<]+>>+>>-]++<<<<-]>-[+[<+[<<<<]>]<+>]+<[->->>>[-]]+<<<<]]>[<<<<]>[-[-[+++++[>++++++++<-]>-.>>>-[<<<----.<]<[<<]>>[-]>->>+[[>>>>]+[-[->>>>+>>>>>>>>-[-[+++<<<<[-]]+>>>>-]++[<<<<]]+<<<<]>>>]+<+<<]>[-[->[--[++>>>>--]->[-[-[+++<<<<-]+>>>>-]]++<+[-<<<<+]++>>>>]<<<<[>[<<<<]+<]>->>]<]>>>>[--[++>>>>--]-<--[+++>>>>--]+>+[-<<<<+]++>>>>]<<<<<[<<<<]<]>[>+<<++<]<]>[+>[--[++>>>>--]->--[+++>>>>--]+<+[-<<<<+]++>>>>]<<<[<<<<]]>>]>]",
};

const Transpiler: NextPage = () => {
  const [translate, setTranslate] = useState("");
  const [bf, setBF] = useState(sampleSets[1]);
  const [showToast, setShowToast] = useState(false);

  // auto timeout toast after 3 seconds
  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  }, [showToast]);

  useEffect(() => {
    const translated = bf.split("").map((val: string) => {
      switch (val) {
        case "+":
          return "👆";
        case "-":
          return "👇";
        case ">":
          return "👉";
        case "<":
          return "👈";
        case ".":
          return "🥺";
        case ",":
          return "😳";
        case "[":
          return "😒";
        case "]":
          return "😡";
        case "?":
          return "🥴";
      }
    });
    setTranslate(translated === undefined ? "" : translated.join(""));
  }, [bf]);

  const copy = () => {
    navigator.clipboard.writeText(translate);
    setShowToast(true);
  };

  const clickedItem = (index: number) => {
    setBF(sampleSets[`${index}`]);
  };

  return (
    <>
      <Title title="UwULang Transpiler" />
      <Navbar />
      <main>
        <section>
          <div
            className="abstract_background3 m-auto max-w-4xl p-32 pt-16 pb-0 text-dark -md:p-4"
            id="transpiler"
          >
            <h2 className="py-16 text-center text-8xl -lg:text-6xl">
              Transpiler
            </h2>
            <textarea
              className="mb-12 h-[50vh] w-full rounded-lg bg-dark p-4 text-xl font-semibold text-white shadow-xl outline-none"
              placeholder="Enter brainfuck code here..."
              onChange={(e) => {
                setBF(e.target.value);
              }}
              value={bf}
            />
          </div>
          {/* buttons for example transpiling text */}
          <div className="m-auto max-w-3xl space-x-2 space-y-2 text-center">
            <button
              className="rounded-full border-2 border-dark bg-button px-10 py-3 text-center text-3xl text-dark transition-all hover:bg-button/70"
              onClick={() => clickedItem(1)}
            >
              Hello World
            </button>
            <button
              className="rounded-full border-2 border-dark bg-button px-10 py-3 text-center text-3xl text-dark transition-all hover:bg-button/70"
              onClick={() => clickedItem(2)}
            >
              1000 Squares
            </button>
            <button
              className="rounded-full border-2 border-dark bg-button px-10 py-3 text-center text-3xl text-dark transition-all hover:bg-button/70"
              onClick={() => clickedItem(3)}
            >
              e (transcendental number)
            </button>
            <button
              className="rounded-full border-2 border-dark bg-red-500 px-10 py-3 text-center text-3xl text-dark transition-all hover:bg-red-500/70"
              onClick={() => clickedItem(0)}
            >
              Remove
            </button>
          </div>
          <div className="m-auto w-[50%] pt-4">
            <hr className="border-dark/65 border-t-[3px]" />
          </div>
          <div className="abstract_background2 relative m-auto max-w-4xl p-32 py-0 text-dark -md:p-4">
            <p
              className="m-h-[50vh] my-12 w-full cursor-pointer rounded-lg bg-dark p-4 text-xl text-white shadow-xl outline-none"
              onClick={() => copy()}
              title="Click to copy to clipboard 📋"
            >
              <span className="hover:animate-pulse">
                {translate.length ? translate : "Output will be here"}
              </span>
            </p>
            {/* relative copy to clipboard button at the top */}
            <div className="absolute top-0 right-0 mx-36 mt-2">
              <button
                className="rounded-lg bg-slate-700 p-2 text-white shadow-xl transition-all hover:bg-slate-600"
                onClick={() => copy()}
              >
                📋
              </button>
            </div>
          </div>
        </section>
        {/* floating center toast saying copied to clipboard 📋 */}
        <div
          className={`fixed bottom-0 right-0 m-8 transition-all ${
            showToast ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center rounded-lg bg-dark p-4 shadow-xl">
              <div className="flex flex-col">
                <span className="text-white">Copied to clipboard 📋</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Transpiler;
