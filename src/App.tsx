import Coin from "./Coin";

const navLinks = {
  Sources: "/sources",
  About: "/about",
};

function App() {
  return (
    <div className="flex">
      <div className="w-6/12">
        <div className="p-20">
          <div className="ml-4 mb-3">
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
          <img src="title.svg" alt="All about Jupiter" className="w-full h-full max-w-[800px]" />
          <div className="mt-20 max-w-[30rem] ml-52">
            <h2 className="font-black text-5xl mb-7 text-shadow text-right mr-20">
              Stuff
            </h2>
            <p className="font-mono text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="p-10 w-6/12">
        <div className="mt-12">
          <h2 className="font-black text-5xl mb-7 text-shadow">Introduction</h2>
          <p className="font-mono text-sm max-w-[30rem] ml-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="font-black text-5xl mb-7 text-shadow text-right mr-[20%]">
            Placeholder text
          </h2>
          <p className="font-mono text-sm max-w-[30rem] ml-[30%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="font-black text-5xl mb-7 text-shadow ml-10">Latin class</h2>
          <p className="font-mono text-sm max-w-[30rem]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="absolute top-[45%] left-[45%]">
        <Coin />
      </div>
    </div>
  );
}

export default App;
