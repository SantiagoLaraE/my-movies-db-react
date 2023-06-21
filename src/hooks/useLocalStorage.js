import { useState } from "react";

function useLocalStorage({ key }) {
  const [data, setData] = useState(() => {
    const LS = localStorage.getItem(key);
    return LS ? JSON.parse(LS) : [];
  });

  const saveData = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };
  
  return { data, saveData };
}

export default useLocalStorage;
