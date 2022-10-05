import { useEffect, useState } from "react";
import useGolden from "./useGolden";

const SOURCES = [
  { link: false, content: "Hesiod, Theogony 116" },
  { link: false, content: "Hesiod, Theogony 453" },
  { link: false, content: "Pseudo-Apollodorus, Bibliotheca 1. 6 - 7" },
  {
    link: true,
    content: "https://www.theoi.com/Olympios/Zeus.html#Attributes",
  },
  { link: true, content: "https://www.theoi.com/Cult/ZeusTitles.html" },
  {
    link: false,
    content: "Some traditions state that Zeus was born on other mountains.",
  },
  { link: false, content: "Hesiod, Theogony. 116" },
  {
    link: false,
    content:
      "Because Rhea is sometimes identified with Ge, Zeus is sometimes also referred to as a son of Ge. (Aeschyl. Suppl. 901.)",
  },
  { link: false, content: "Hesiod, Theogony 511" },
  { link: true, content: "https://www.theoi.com/Olympios/ZeusLoves.html" },
  { link: true, content: "https://www.theoi.com/Olympios/ZeusLoves2.html" },
  { link: true, content: "https://www.theoi.com/Olympios/ZeusLoves3.html" },
  { link: false, content: "Pseudo-Apollodorus, Bibliotheca 3. 10. 5 - 7 " },
  { link: true, content: "https://www.theoi.com/Gallery/K1.10.html" },
  {
    link: true,
    content: "https://www.theoi.com/Olympios/ZeusLoves3.html#Danae",
  },
  { link: true, content: "https://www.theoi.com/Ther/AixAmaltheia.html" },
  {
    link: true,
    content:
      "https://www.britannica.com/place/Olympia-ancient-site-Greece/The-remains",
  },
];

export default function Sources() {
  const golden = useGolden();

  return (
    <div className="m-10">
      <a
        className="text-blue-500 visited:text-purple-700 underline text-lg font-semibold"
        href="/"
      >
        Back home
      </a>
      <h1 className="font-semibold text-4xl my-5">Sources and footnotes</h1>
      <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside">
        {SOURCES.map((item, i) => (
          <li key={i}>
            <span id={(i + 1).toString()} className="target:bg-yellow-100">
              {item.link ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 visited:text-purple-700 underline"
                  href={item.content}
                >
                  {item.content}
                </a>
              ) : (
                <>{item.content}</>
              )}
            </span>
          </li>
        ))}
        {golden && (
          <li>
            <span className="text-yellow-500">
              <>I made it up</>
            </span>
          </li>
        )}
      </ol>
    </div>
  );
}
