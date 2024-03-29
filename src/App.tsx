import { useState } from "react";
import Coin from "./Coin";

const navLinks = {
  Sources: "/sources",
  About: "/about",
  Images: "/images",
};

function App() {
  const [golden, setGolden] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row">
      <div className="xl:w-6/12">
        <div className="xl:p-20">
          <div className="xl:max-w-2xl max-w-md md:max-w-xl mx-auto mt-5 xl:mt-0">
            <div className="m-5">
              <div className="md:ml-4 mb-3 text-center md:text-left">
                {Object.entries(navLinks).map(([key, val], i) => (
                  <a
                    href={val}
                    key={i}
                    className="mr-4 font-semibold text-lg underline visited:text-purple-700"
                  >
                    {key}
                  </a>
                ))}
              </div>
              <img
                src="title.svg"
                alt="All about Zeus"
                className="w-full h-full max-w-[800px]"
              />
            </div>
          </div>
          <div className="mt-20 xl:max-w-[30rem] mx-auto">
            <div className="mx-5">
              <h2 className="font-black text-5xl mb-7 text-shadow xl:text-right xl:mr-15">
                Foundation myth
              </h2>
              <article className="font-mono text-sm">
                <p className="mb-5">
                  Zeus was the child of two titans, Kronos and Rhea{" "}
                  <a
                    href="/sources#8"
                    className="text-blue-500 visited:text-purple-700 underline"
                  >
                    [8]
                  </a>
                  . He was the youngest among five brothers, Hestia, Demeter,
                  Hera, Hades, and Poseidon{" "}
                  <a
                    href="/sources#1"
                    className="text-blue-500 visited:text-purple-700 underline"
                  >
                    [1]
                  </a>
                  . When Poseidon and Haides were born, they were eaten by
                  Kronos, who didn’t want any of his children to replace him as
                  king of the Gods, as was predicted by Gaia and Ouranos{" "}
                  <a
                    href="/sources#2"
                    className="text-blue-500 visited:text-purple-700 underline"
                  >
                    [2]
                  </a>
                  .
                  {golden && (
                    <p className="text-yellow-400">
                      Note: Why even have children in the first place ?
                    </p>
                  )}
                </p>
                <p className="mb-5">
                  Except, when Zeus was about to be born, Rhea asked Uranus and
                  Ge for advice to save Zeus. Uranus and Ge sent Rhea to Lyctos
                  in Crete, and asked her to bring her child there. Rhea hid
                  Zeus in a cave in Mount Aegaeon{" "}
                  <a
                    href="/sources#6"
                    className="text-blue-500 visited:text-purple-700 underline"
                  >
                    [6]
                  </a>
                  , and gave Kronos a stone wrapped in cloth, which he swallowed{" "}
                  <a
                    href="/sources#7"
                    className="text-blue-500 visited:text-purple-700 underline"
                  >
                    [7]
                  </a>
                  . Zeus then grew up in Krete, and was nursed by nymphs with
                  the milk of the goat Amaltheia{" "}
                  <a
                    href="/sources#16"
                    className="text-blue-500 visited:text-purple-700 underline"
                  >
                    [16]
                  </a>
                  .
                  {golden && (
                    <p className="text-yellow-400">
                      Note: I feel like it’s pretty easy to tell a stone isn’t a
                      baby just saying
                    </p>
                  )}
                </p>
              </article>
            </div>
          </div>
          <div className="mt-32 xl:max-w-[30rem] xl:ml-[20%] mx-auto">
            <div className="mx-5">
              <h2 className="font-black text-5xl mb-7 text-shadow xl:text-right xl:mr-5">
                Appearance
              </h2>
              <article className="font-mono text-sm">
                <p className="mb-5">
                  Zeus is usually depicted as a man with a dark beard, his royal
                  sceptre, his eagle, and his iconic lightning bolt, which he
                  got from Kyklopes{" "}
                  <a
                    href="/sources#3"
                    className="text-blue-500 visited:text-purple-700 underline"
                  >
                    [3]
                  </a>
                  . He was usually depicted with a long robe, but was sometimes
                  depicted as nude. He often wears his crown of olive leaves{" "}
                  <a
                    href="/sources#4"
                    className="text-blue-500 visited:text-purple-700 underline"
                  >
                    [4]
                  </a>
                  .
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:p-10 xl:w-6/12 mx-auto">
        <div className="mx-5">
          <div className="mt-12 flex justify-center xl:block flex-col">
            <h2 className="font-black text-5xl mb-7 text-shadow">
              Character traits
            </h2>

            <article className="font-mono text-sm xl:max-w-[30rem] xl:ml-10">
              <p className="mb-5">
                First, Zeus had many, many love affairs [10, 11, 12]. He
                constantly cheated on his wife Hera, and had children with many
                nymphs, goddesses, demigoddesses, and mortals. Many times, he
                changed himself as an animal or an object to do so. Such animals
                include a swan{" "}
                <a
                  href="/sources#13"
                  className="text-blue-500 visited:text-purple-700 underline"
                >
                  [13]
                </a>
                , a bull{" "}
                <a
                  href="/sources#14"
                  className="text-blue-500 visited:text-purple-700 underline"
                >
                  [14]
                </a>
                , and a golden shower{" "}
                <a
                  href="/sources#15"
                  className="text-blue-500 visited:text-purple-700 underline"
                >
                  [15]
                </a>
                .
              </p>
              <p className="mb-5">
                Zeus was also quick to anger. For example, when Prometheus stole
                fire from the Gods and gave it to humans, Zeus got angry and
                tied him with chains, impaled him with a stick, and sent an
                eagle to eat his liver everyday{" "}
                <a
                  href="/sources#9"
                  className="text-blue-500 visited:text-purple-700 underline"
                >
                  [9]
                </a>
                .
              </p>
              <p>Zeus was also described as “wise” in some ancient texts.</p>
            </article>
          </div>
          <div className="mt-12 flex justify-center xl:block flex-col xl:ml-[20%]">
            <h2 className="font-black text-5xl text-shadow mb-5">
              What does he have command over?
            </h2>

            <article className="font-mono text-sm xl:max-w-[30rem] xl:ml-10">
              <p className="mb-5">
                Zeus was the King of the Gods and the god of sky, weather, law
                and order, destiny and fate, kingship, and moral conduct{" "}
                <a
                  href="/sources#5"
                  className="text-blue-500 visited:text-purple-700 underline"
                >
                  [5]
                </a>
                .
                {golden && (
                  <p className="text-yellow-400">
                    Note: I kinda have a hard time believing Zeus was god of
                    moral conduct
                  </p>
                )}
              </p>
            </article>
          </div>

          <div className="mt-12">
            <h2 className="mb-7 xl:mr-[20%] xl:text-right">
              <div className="font-black text-shadow text-5xl">
                Temple of Zeus
              </div>
              <span className="mr-10">
                Highlights of{" "}
                <a
                  href="/sources#17"
                  className="text-blue-500 visited:text-purple-700 underline"
                >
                  [17]
                </a>
              </span>
              <a
                href="/images"
                className="text-blue-500 visited:text-purple-700 underline"
              >
                Images
              </a>
            </h2>
            <article className="font-mono text-sm xl:max-w-[30rem] xl:ml-[30%]">
              <p className="mb-5">
                The temple of Zeus was a temple in Athens. It was built around
                460 BC by the architect Libon of Elis, and was made of shell
                conglomerate. The exposed surfaces were covered with a coat of
                white stucco. Its porch and rear porch provided access to the
                central hall, which was divided into ailes by two rows of
                columns.
              </p>

              <p className="mb-5">
                The temple was decorated with lots of sculptures, many of which
                have survived. The sculptures depicted many myths, such as the
                chariot race between Pelops and Oenemaus, or the battle of the
                Lapiths and Centaurs at Pirithous’ wedding.
              </p>

              <p className="mb-5">
                Inside the temple was one of the seven wonders of the ancient
                world, the Statue of Zeus. It was made by the Athenian sculptor
                Phidias, who represented the god seated on a throne.
              </p>
              <p className="mb-5">
                Beside the temple was the great altar of Olympian Zeus, in which
                was a mound of the ashes of the animals sacrificed to Zeus.
              </p>
            </article>
          </div>
        </div>
      </div>
      <div className="absolute top-[500px] left-[45%] hidden xl:block">
        <Coin onGoldChange={(g) => setGolden(g)} />
      </div>
    </div>
  );
}

export default App;
