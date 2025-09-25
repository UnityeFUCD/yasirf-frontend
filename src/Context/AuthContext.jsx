/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  console.log("step: " + step)

  return (
    <AuthContext.Provider value={{ step, setStep }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
