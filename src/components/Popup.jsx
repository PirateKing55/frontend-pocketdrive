export const Popup = ({ options, position }) => {
  return (
    <div
      className={`z-10 bg-white border-gray-200 rounded-md border-[1px] text-base font-normal  ${position}`}
    >
      {options.map((option, index) => (
        <div
          className={`hover:bg-gray-50 cursor-pointer p-1 flex justify-center active:shadow-inner ${
            index + 1 === options.length
              ? ""
              : "border-b-[1px] border-gray-200 "
          }`}
          key={index}
        >
          {option}
        </div>
      ))}
    </div>
  );
};
