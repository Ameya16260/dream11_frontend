// JsonDataContext.js
import { createContext, useContext } from "react";

const JsonDataContext = createContext();

export const JsonDataProvider = ({ children, data }) => (
  <JsonDataContext.Provider value={data}>{children}</JsonDataContext.Provider>
);

export const useJsonData = () => useContext(JsonDataContext);
