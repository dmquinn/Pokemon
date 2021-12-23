import React from "react";

const PokemonList = (props: any) => {
  const { children, pageIndex, setPageIndex } = props;

  return (
    <>
      <div className="flex flex-row justify-end pb-10">
        {pageIndex !== 1 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            BACK
          </button>
        )}
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          NEXT
        </button>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-10 p-10">
        {children}
      </div>
    </>
  );
};

export default PokemonList;
