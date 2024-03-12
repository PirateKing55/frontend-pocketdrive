import { Item } from "../components";
import { FaPlus } from "react-icons/fa6";
import { SearchBar } from "../components";
import { useState, useRef, useEffect } from "react";
import { Popup } from "../components";
import { HiOutlineDotsVertical } from "react-icons/hi";

export const Collection = ({ collectionName }) => {
  const [popupVisibility, setPopupVisibility] = useState(false);
  const collectionItems = [
    {
      name: "item1",
    },
    {
      name: "item2",
    },
    {
      name: "item3",
    },
    {
      name: "item4",
    },
  ];

  const [reversedCollectionItems, setReversedCollectionItems] = useState(
    collectionItems.slice().reverse()
  );

  const itemRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (itemRef.current && !itemRef.current.contains(event.target)) {
        setPopupVisibility(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [itemRef]);

  return (
    <div className="flex flex-col w-3/5 h-full gap-5 p-5">
      <SearchBar
        onchange={(e) => {
          setReversedCollectionItems(collectionItems.slice().reverse());
          setReversedCollectionItems((prev) => {
            return prev.filter((item) => item.name.includes(e.target.value));
          });
        }}
      />
      <div className="w-full p-5 bg-white rounded-xl grow">
        <h2 className="relative inline-flex items-center gap-2 mb-5 text-2xl font-medium text-gray-600">
          {collectionName}
          <span
            ref={itemRef}
            onClick={() => {
              setPopupVisibility((prev) => !prev);
            }}
            className="flex items-center justify-center w-5 h-5 rounded cursor-pointer hover:bg-gray-300"
          >
            <HiOutlineDotsVertical />
          </span>
          {popupVisibility && (
            <Popup
              options={["Share", "Delete", "Rename"]}
              position={"absolute right-[-70px] top-0"}
            />
          )}
        </h2>
        <div className="flex flex-wrap gap-5">
          {reversedCollectionItems.map((item, index) => {
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
