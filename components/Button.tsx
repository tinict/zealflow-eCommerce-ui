import React from "react";
import { Button } from "@nextui-org/button";

function ButtonConfig({
  className,
  bordered = false,
  full = false,
  children,
  ...props
}: any) {
  return (
    <Button
      {...props}
      className={`
        px-5 py-3 rounded-none  font-normal
        ${full && "w-full"}
        ${bordered ? "bg-white text-red_main border-2 border-red_main" : "bg-red_main text-white"}
        ${className}
    `}
    >
      <p>{children}</p>
    </Button>
  );
}

export default ButtonConfig;
