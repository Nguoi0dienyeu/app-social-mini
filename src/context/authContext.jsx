import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login = () => {
    setCurrentUser({
      id: 1,
      name: "ssonnguyen",
      profilePic:
        "https://images.pexels.com/photos/14096606/pexels-photo-14096606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
