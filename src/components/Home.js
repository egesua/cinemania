import React, { useContext } from "react";
import { AppContext } from "../context";
import Movies from "./Movies";
import Search from "./Search";

const Home = () => {
  const name = useContext(AppContext);

  //TODO globalcontext kullanarak dene.

  return (
    <>
      <Search />
      <Movies />
    </>
  );
};

export default Home;
