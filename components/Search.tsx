import React from "react";
import { Input } from "@nextui-org/input";

import { SearchIcon } from "./icons";

function Search({ ...props }: any) {
  return (
    <Input
      {...props}
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
}

export default Search;
