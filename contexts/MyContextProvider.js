"use client"
import { createContext, useState, useEffect } from 'react';
import UserStore from '../store/UserStore';
import DataStore from '../store/DataStore';
import { dataUser } from '../http/userAPI';
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [user] = useState(new UserStore())
  const [dataApp] = useState(new DataStore())

  const updateState = (newState) => {
    setState(newState);
  };

  useEffect(() => {
    dataUser()
      .then(data => {
        user.setUserData(data)
        if (data) {
          user.setIsAuth(true)
          user.setUser(true)
        }
      })
      .catch(data => {
        console.log('🚀 🚀 🚀dataUser err:', data)
      })
  }, [user])
      
   
     

 

  return (
    <MyContext.Provider value={{ state, updateState, user, dataApp }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
