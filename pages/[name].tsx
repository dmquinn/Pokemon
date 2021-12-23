import { useRouter } from "next/router";
import React from "react";

const NamedPokemon = (props: any) => {
  const router = useRouter();
  const { name } = router.query;

  return <div>{name}</div>;
};

export default NamedPokemon;
