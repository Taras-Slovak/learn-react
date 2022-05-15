import React, { createContext, useContext, useMemo, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export function StateContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_GOOGLE_SEARCH_KEY,
      },
    });

    const data = await res.json();

    setResults(data);
    setLoading(false);
  };

  const useMemory = useMemo(() => ({ getResults, results, searchTerm, setSearchTerm, loading }), []);

  return (
    <StateContext.Provider value={useMemory}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
