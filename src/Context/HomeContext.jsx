import React, { createContext, useState, useContext } from 'react';
import fetchHouse from '../Service/House';


const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [airConditioner, setAirConditioner] = useState(0);
  const [light, setLight] = useState(0);
  const [door, setDoor] = useState(0);
  const [gate, setGate] = useState(0);



  const updateDeviceStatus = async (device) => {
    try {
      const data = await fetchHouse (device);
      
      switch (data.device) {
        case 'air_conditioner':
          setAirConditioner(data.status);
          break;
        case 'light':
          setLight(data.status);
          break;
        case 'door':
          setDoor(data.status);
          break;
        case 'gate':
          setGate(data.status);
          break;
        default:
          break;
      }
    } catch (error) {
        console.error(error);
    }


  
  };

  return (
    <HomeContext.Provider
      value={{
        airConditioner,
        setAirConditioner,
        light,
        setLight,
        door,
        setDoor,
        gate,
        setGate,
        updateDeviceStatus,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
