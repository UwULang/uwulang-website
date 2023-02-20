/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import Interpreter from "./interpreter";

const sampleSet = [
  "",
  "👆👆👆👆👆👆👆👆👆👆😒👉👆👆👆👆👆👆👆👉👆👆👆👆👆👆👆👆👆👆👉👆👆👆👉👆👈👈👈👈👇😡👉👆👆🥺👉👆🥺👆👆👆👆👆👆👆🥺🥺👆👆👆🥺👉👆👆🥺👈👈👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆🥺👉🥺👆👆👆🥺👇👇👇👇👇👇🥺👇👇👇👇👇👇👇👇🥺👉👆🥺👉🥺",
  "👆👆👆👆😒👉👆👆👆👆👆👈👇😡👉😒👈👆👆👆👆👆👉👇😡👆👈👆😒👉😒👉👆👉👆👈👈👇😡👆👆👉👉😒👈👈👆👉👉👇😡👉👉👉😒👇😡👆👆👉😒👇😡👆👉👉👉👆😒😒👇😡👆👆👆👆👆👆👉👉👉😡👈👈👈😒😒👈👆👆👆👆👆👆👆👆👈👆👆👉👉👇😡👆👈🥺👈😒👉👇👇👇👇👈👇😡👈😡👈👈😒👉👉👉👉👉😒👉👉👉😒👇😡👆👆👆👆👆👆👆👆👆👈😒👉👇👈👇😡👆👆👆👆👆👆👆👆👆👉😒👇😒👈👇👉👇😡👆😒👈👈👈😡😡👈😒👉👆👈👇😡👉😡👈👈👇😡👈👈👇😡",
  "👉👉👉👉👆👆👉👆👉👆👆👉👆👉👉👆👆👈👆😒😒👉😒👉👉😒👉👉👉👉😡👈👈👈👈😒😒👉👉👉👉👆👈👈👈👈👇😡👈👈👈👈😡👉👉👉👉👉👉😡👆👈😡👉👇👉👉👇👇😒👆😒👆👆👆👈👈👈👈👇👇😡👆👆👉👉👉👉👇👇😡👆😒👉👉👉👉😡👈👈👈👈😒👈👈👆👈👆👈😡👈👈😒👉👉👉👉👉👉😒😒👈👈👈👈👆👉👉👉👉👇😡👉👉👉👉😡👈👈👈👈👈👈👈👈😒👈👈👈👈😡👉👉👇😒👈👈👆👉👉👇😡👆👈👈😒👇👉👉👉👉😒👇😒👆👉👉👉👉👇😡👇👈👈👇😒👉👉👉👉👇😡👆👆👉👉👆😒👇👈👈👈👈👆😡👆👉👉👉👉😡👈👈👈👈😒👈👈👈👈😡😡👉😒👇😒👈👆👉👇😡😡👆👈😒👇👉👉👉👉😒👇😒👆👉👉👉👉👇😡👇👈👈👈👇😒👉👉👉👉👇😡👆👆👉👉👉👆😒👇👈👈👈👈👆😡👆👉👉👉👉😡👈👈👈👈😒👈👈👈👈😡😡👈👈😡👉👉👉👆😒👉👉👉👉😡👇😒👆👈👈👈👈👇👇😡👆👆😒👈👈👈👈😡👉👉👉👆😒👉👇😒👉👉😒👇👇😒👆👆👉👉👆👉👉👇👇😡👇👈😒👇😒👇😒👆👆👆👈👈👈👈👇😡👆👉👉👉👉👇😡😡👆👆👉👆😒👇👈👈👈👈👆😡👆👆👉👉👆👉👉😡👈👈😒👉😒👈👇👈👈👈😡👆👈😡👉👇👉👉👉😡👆👉😒👉👉👉👉😡👇😒👆👈👈👈👈👇👇😡👆👆👈😒😒👉👉👉👉😡👈👈👈👈😒👇😒👆👉😒👈👇👉👇😡👆👆👈😒😒👉👇👈👇😡👆👆😒👈👈👈👈😡👆👉👉👆👉👉👇😡👆👆👈👈👈👈👇😡👉👇😒👆😒👈👆😒👈👈👈👈😡👉😡👈👆👉😡👆👈😒👇👉👇👉👉👉😒👇😡😡👆👈👈👈👈😡😡👉😒👈👈👈👈😡👉😒👇😒👇😒👆👆👆👆👆😒👉👆👆👆👆👆👆👆👆👈👇😡👉👇🥺👉👉👉👇😒👈👈👈👇👇👇👇🥺👈😡👈😒👈👈😡👉👉😒👇😡👉👇👉👉👆😒😒👉👉👉👉😡👆😒👇😒👇👉👉👉👉👆👉👉👉👉👉👉👉👉👇😒👇😒👆👆👆👈👈👈👈😒👇😡😡👆👉👉👉👉👇😡👆👆😒👈👈👈👈😡😡👆👈👈👈👈😡👉👉👉😡👆👈👆👈👈😡👉😒👇😒👇👉😒👇👇😒👆👆👉👉👉👉👇👇😡👇👉😒👇😒👇😒👆👆👆👈👈👈👈👇😡👆👉👉👉👉👇😡😡👆👆👈👆😒👇👈👈👈👈👆😡👆👆👉👉👉👉😡👈👈👈👈😒👉😒👈👈👈👈😡👆👈😡👉👇👉👉😡👈😡👉👉👉👉😒👇👇😒👆👆👉👉👉👉👇👇😡👇👈👇👇😒👆👆👆👉👉👉👉👇👇😡👆👉👆😒👇👈👈👈👈👆😡👆👆👉👉👉👉😡👈👈👈👈👈😒👈👈👈👈😡👈😡👉😒👉👆👈👈👆👆👈😡👈😡👉😒👆👉😒👇👇😒👆👆👉👉👉👉👇👇😡👇👉👇👇😒👆👆👆👉👉👉👉👇👇😡👆👈👆😒👇👈👈👈👈👆😡👆👆👉👉👉👉😡👈👈👈😒👈👈👈👈😡😡👉👉😡👉😡",
];

const selectionSet = [
  "Remove",
  "Hello World",
  "1000 Squares",
  "e (transcendental)",
];

export default function Demo() {
  const [currentEntry, setCurrentEntry] = useState(sampleSet[1]);
  const [output, setOutput] = useState("");
  const [selectedSet, setSelectedSet] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);

  const run = async () => {
    if (currentEntry === "") {
      return;
    }
    const generator = Interpreter(currentEntry!);
    let output = "";
    let count = 0;
    let res = generator.next();
    while (res.value && count < 200) {
      output += res.value;
      res = generator.next();
      count++;
    }
    setOutput(`${output}${count > 199 ? "..." : ""}`);
  };

  return (
    <>
      <div
        className="abstract_background2 m-auto max-w-4xl p-32 pt-16 text-dark -md:p-4"
        id="demo"
      >
        <h2 className="pb-16 text-center text-8xl -lg:text-6xl">Try it here</h2>
        {/* dropdown */}

        <div className="relative mb-4 inline-block text-left">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-100"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectionSet[selectedSet]}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showDropdown && (
            <div
              className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                {selectionSet.map((item, index) => {
                  return (
                    <a
                      className={`${
                        index
                          ? "text-gray-700 hover:text-gray-900"
                          : "text-red-500 hover:text-red-700"
                      } block px-4 py-2 text-sm hover:bg-gray-100`}
                      role="menuitem"
                      tabIndex={-1}
                      id={`menu-item-${index}`}
                      key={index}
                      onClick={() => {
                        setSelectedSet(index);
                        setCurrentEntry(sampleSet[index]);
                        setShowDropdown(false);
                      }}
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <textarea
          className="mb-12 h-[50vh] w-full rounded-lg bg-dark p-4 text-xl font-semibold text-white shadow-xl outline-none"
          placeholder="Enter UwULang code here..."
          onChange={(e) => {
            setCurrentEntry(e.target.value);
          }}
          value={currentEntry}
          spellCheck="false"
        />
        <div className="pt-8 text-center">
          <button
            onClick={() => run()}
            className="rounded-full border-2 border-dark bg-button px-10 py-3 text-center text-3xl text-dark transition-all hover:bg-button/70"
          >
            Run {">>"}
          </button>
        </div>
        {/* output */}
        {output && (
          <p
            className="mt-12 h-[50vh] w-full cursor-pointer overflow-y-auto whitespace-pre-line break-words rounded-lg bg-dark p-4 text-xl text-white shadow-xl outline-none"
            title="UwULang output"
          >
            {output}
          </p>
        )}
      </div>
    </>
  );
}
