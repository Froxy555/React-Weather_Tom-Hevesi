import { createContext } from "react";

const initialAppState = {
  weather: null,
  unit: "C",
  city: "Mátészalka",
  country: "HU",
  isDark: true,
  geoCoords: {
    lon: 22.0333,
    lat: 47.9500,
  },
};

function appReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "WEATHER":
      return { ...state, weather: payload };
    case "CITY":
      return { ...state, city: payload };
    case "COUNTRY":
      return { ...state, country: payload };
    case "UNIT":
      return { ...state, unit: payload };
    case "GEO_COORDS":
      return { ...state, geoCoords: payload };
    case "DARK":
      return { ...state, isDark: payload };
    default:
      return state;
  }
}

const AppContext = createContext();

export { appReducer, initialAppState };
export default AppContext;
