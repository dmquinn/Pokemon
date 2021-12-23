import React from "react";

const PokemonList = (props: any) => {
  const { children, pageIndex, setPageIndex } = props;

  return (
    <>
      <div>
        {pageIndex !== 1 && (
          <button
            className="bg-blue-500 py-2 px-4 rounded"
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            BACK
          </button>
        )}
        <button
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          NEXT
        </button>
      </div>
      <div>{children}</div>
    </>
  );
};

export default PokemonList;
