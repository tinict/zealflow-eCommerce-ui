import React from "react";

function InputConfig({ ...props }: any) {
  return (
    <input
      {...props}
      className="
        w-full h-[40px] border-1 border-gray-400 outline-none px-4 transition-all
        focus:border-red_main
    "
    />
  );
}

export default InputConfig;
