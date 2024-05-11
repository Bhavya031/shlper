"use client"
import React from "react";
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";

export default function Searchbar() {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearch = () => {
    window.location.href = `/youtube/${handleYoutubeVideoChange(searchValue)}`;
  };

  return (
    <div className="w-[50%] h-[120px] rounded-2xl flex justify-center items-center">
      <Input
        size="lg"
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Enter your link here"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </div>
  );
}
//handle youtube video link
function handleYoutubeVideoChange(inputString) {
  var newval = "";
  
  if ((newval = inputString.match(/(\?|&)v=([^&#]+)/))) {
    return newval.pop();
  } else if ((newval = inputString.match(/(\.be\/)+([^\/]+)/))) {
    return newval.pop();
  } else if ((newval = inputString.match(/(\embed\/)+([^\/]+)/))) {
    return newval.pop().replace("?rel=0", "");
  }
  
  return null; // Return null if no match found
}