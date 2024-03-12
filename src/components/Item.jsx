// import { HiOutlineDotsHorizontal } from "react-icons/hi";
// import { Popup } from "./Popup";
// import { useState } from "react";

// export const Item = ({ name }) => {
//   const [popupVisibility, setPopupVisibility] = useState(false);
//   return (
//     <div className="relative flex rounded-md bg-[#fbfbfb] justify-center items-center w-36 h-36">
//       {name}
//       <span
//         onClick={() => {
//           setPopupVisibility((prev) => !prev);
//         }}
//         className="absolute flex items-center justify-center w-5 h-5 rounded cursor-pointer top-2 right-2 hover:bg-gray-300"
//       >
//         <HiOutlineDotsHorizontal />
//       </span>
//       {popupVisibility && (
//         <Popup options={["Share", "Delete", "Move", "Rename"]} />
//       )}
//     </div>
//   );
// };

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Popup } from "./Popup";
import { useState, useEffect, useRef } from "react";

export const Item = ({ name }) => {
  const [popupVisibility, setPopupVisibility] = useState(false);
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
    <div className="relative flex rounded-md bg-[#fbfbfb] justify-center items-center w-36 h-36">
      {name}
      <span
        ref={itemRef}
        onClick={() => {
          setPopupVisibility((prev) => !prev);
        }}
        className="absolute flex items-center justify-center w-5 h-5 rounded cursor-pointer top-2 right-2 hover:bg-gray-300"
      >
        <HiOutlineDotsHorizontal />
      </span>
      {popupVisibility && (
        <Popup
          options={["Share", "Delete", "Move", "Rename"]}
          position={"absolute left-36 top-2"}
        />
      )}
    </div>
  );
};
