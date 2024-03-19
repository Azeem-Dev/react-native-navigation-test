import { createContext, useState } from "react";

export const FavourtiesContext = createContext({
  ids: [],
  addFavourtie: (id) => {},
  removeFavourtie: (id) => {},
});

const FavourtiesContextProvider = ({ children }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  const addFavourtie = (id) => {
    setFavouriteMealIds((snap) => [...snap, id]);
  };
  const removeFavourtie = (id) => {
    setFavouriteMealIds((snap) => snap.filter((c) => c !== id));
  };

  const value = {
    ids: favouriteMealIds,
    addFavourtie: addFavourtie,
    removeFavourtie: removeFavourtie,
  };
  return (
    <FavourtiesContext.Provider value={value}>
      {children}
    </FavourtiesContext.Provider>
  );
};

export default FavourtiesContextProvider;
