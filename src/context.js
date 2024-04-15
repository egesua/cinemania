import React, { useContext, useEffect } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=727bbdc1&s=titanic`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  useEffect(() => {
    const getMovies = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies(API_URL);
  }, []);

  return <AppContext.Provider value="egesua">{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
