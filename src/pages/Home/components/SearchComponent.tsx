import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';



type SearchProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchComponent: React.FC<SearchProps> = ({setSearch}) => {
  const [state, setState] = useState<string>("");
  const debounced = useDebouncedCallback((value) => {
    setSearch(value);
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounced(e.target.value);
    setState(e.target.value);
    console.log(state);
  };

  return (
    <div className='search_container max-w-[940px] mx-auto'>
      <form className="text-[14px] pt-[50px] pb-8 flex flex-row items-center justify-center">
        <input
          type="text"
          className="py-[8px] pl-[20px] pr-[36px] rounded-full outline-none w-[300px] md:w-[340px] text-stone-200 shadow-md transition-all duration-300 focus:shadow-sm text-[#666] focus:bg-[#474550] bg-[#302D3A] font-medium dark:bg-[#302d3a] dark:text-primary dark:focus:bg-[#474550]"
          onChange={handleChange}
          value={state}
        />
        <button type="submit" className="text-[18px] -ml-[32px] text-[#ff0000] z-[1]"></button>
      </form>
    </div>
  );
};

export default SearchComponent;
