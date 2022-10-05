export default function Images() {
  return (
    <div className="lg:m-10 m-3">
      <a
        className="text-blue-500 visited:text-purple-700 underline text-lg font-semibold"
        href="/"
      >
        Back home
      </a>
      <h1 className="font-semibold text-4xl my-5">Images</h1>
      <h2 className="text-2xl my-5">The temple of Zeus</h2>
      <div className="mb-7">
        <h3 className="text-lg mb-2 font-semibold">The temple, now</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/27/Dias_entrance_EAST_01.jpg"
          alt="The temple today"
          className="max-h-lg max-w-lg w-full h-full"
        />
        <a
          href="https://commons.wikimedia.org/wiki/File:Dias_entrance_EAST_01.jpg"
          className="text-blue-500 visited:text-purple-700 underline"
        >
          Pan.stathopoulos
        </a>
        ,{" "}
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0"
          className="text-blue-500 visited:text-purple-700 underline"
        >
          CC BY-SA 4.0
        </a>
        , via Wikimedia Commons
      </div>
      <div className="mb-7">
        <h3 className="text-lg mb-2 font-semibold">
          Restored view of the Temple of Zeus
        </h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Olympia-ZeusTempelRestoration.jpg"
          alt="Restored view of the Temple of Zeus"
          className="max-h-lg max-w-lg w-full h-full"
        />
        <p>
          Source: Wilhelm Lübke, Max Semrau: Grundriß der Kunstgeschichte. Paul
          Neff Verlag, Esslingen, 14th edition 1908.
        </p>
      </div>
      <div className="mb-7">
        <h3 className="text-lg mb-2 font-semibold">Temple of Zeus plan</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Temple_of_Zeus_%28Olympia%29_Plan.svg"
          alt="Temple of Zeus plan"
          className="max-h-lg max-w-lg w-full h-full"
        />
        <a
          className="text-blue-500 visited:text-purple-700 underline"
          href="https://commons.wikimedia.org/wiki/File:Temple_of_Zeus_(Olympia)_Plan.svg"
        >
          Pompilos
        </a>
        ,{" "}
        <a
          className="text-blue-500 visited:text-purple-700 underline"
          href="https://creativecommons.org/licenses/by-sa/4.0"
        >
          CC BY-SA 4.0
        </a>
        , via Wikimedia Commons
      </div>
      <div className="mb-7">
        <h3 className="text-lg mb-2 font-semibold">The statue of Zeus</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/66/Le_Jupiter_Olympien_ou_l%27art_de_la_sculpture_antique.jpg"
          alt="The statue of Zeus"
          className="max-h-lg max-w-lg w-full h-full"
        />
        <a
          className="text-blue-500 visited:text-purple-700 underline"
          href="https://commons.wikimedia.org/wiki/File:Le_Jupiter_Olympien_ou_l%27art_de_la_sculpture_antique.jpg"
        >
          Quatremère de Quincy
        </a>
        , Public domain, via Wikimedia Commons
      </div>
      <h2 className="text-2xl my-5">Zeus</h2>
      <div className="mb-7">
        <h3 className="text-lg mb-2 font-semibold">
          A depiction of Zeus on a vase
        </h3>
        <img
          src="/K1.1Zeus.jpg"
          alt="A depiction of Zeus on a vase"
          className="max-h-lg max-w-lg w-full h-full"
        />
        <a
          className="text-blue-500 visited:text-purple-700 underline"
          href="https://www.theoi.com/Gallery/K1.1.html"
        >
          Musée du Louvre, Paris
        </a>
      </div>
      <div className="mb-7">
        <h3 className="text-lg mb-2 font-semibold">
          Zeus wielding lightning, on an amphora
        </h3>
        <img
          src="/K1.2Zeus.jpg"
          alt="Zeus wielding lightning, on an amphora"
          className="max-h-lg max-w-lg w-full h-full"
        />
        <a
          className="text-blue-500 visited:text-purple-700 underline"
          href="https://www.theoi.com/Gallery/K1.2.html"
        >
          Staatliche Antikensammlungen, Munich
        </a>
      </div>
    </div>
  );
}
