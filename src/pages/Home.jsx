import { Item } from "../components";
import { FaPlus } from "react-icons/fa6";
import { SearchBar } from "../components";
import { useState } from "react";

export const Home = () => {
  const name = "amrit";
  const recentUploads = [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
    { name: "item5" },
    { name: "item6" },
    { name: "item7" },
  ];

  const [reversedRecentUploads, setReversedRecentUploads] = useState(
    recentUploads.slice().reverse()
  );

  const gradientText = (text) => {
    return (
      <span
        className="text-5xl font-semibold bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, #5080ed, #bb6c9f, #d56675)`,
          backgroundSize: "100% 100%",
          animation: "gradientAnimation 5s ease-in-out infinite alternate",
        }}
      >
        Hello, {text[0].toUpperCase() + text.slice(1, text.length)}
      </span>
    );
  };

  return (
    <div className="w-3/5 p-5 gap-5 h-full flex flex-col">
      <SearchBar
        onchange={(e) => {
          setReversedRecentUploads(recentUploads.slice().reverse());
          setReversedRecentUploads((prev) => {
            return prev.filter((item) => item.name.includes(e.target.value));
          });
        }}
      />
      <div className="rounded-xl w-full px-10 py-5 grow bg-white">
        <h1 className="text-5xl font-bold mb-2">{gradientText(name)}</h1>
        <h1 className="text-5xl font-semibold mb-10 text-[#b8b9b8]">
          What do you want to store today?
        </h1>
        <h2 className="mb-5 font-medium text-gray-600 text-2xl">
          Your recent uploads:
        </h2>
        <div className="flex gap-5 flex-wrap">
          {reversedRecentUploads.map((item, index) => {
            return <Item key={index} name={item.name} />;
          })}
          <button className="flex rounded-md bg-[#fbfbfb] justify-center items-center w-36 h-36 text-5xl text-[#c8c7c7] active:border-2 active:border-black">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
