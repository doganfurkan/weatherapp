import { createContext , useContext, useState } from "react";
export const GlobalContext = createContext();

const WeatherContext = ({children}) => {

    const [menuOpen,setMenuopen] = useState("No Data Yet");
    const [locater, setLocater] = useState({
        lat:"30",
        lon:"35",
        city: ""
    })
    const [weatherData, setWeatherData] = useState({
        degrees:"",
        description:  "",
        feels_like: "",
        hourly: []
    })

    const [isLoading, setLoading] = useState("loading");

    const [isMenuOpen, setMenuOpen] = useState("notActive");


    const values = {
        menuOpen ,
        setMenuopen,
        weatherData,
        setWeatherData,
        locater,
        setLocater,
        isLoading,
        setLoading,
        isMenuOpen,
        setMenuOpen
    }

    return (
    <GlobalContext.Provider value={values}>
        {children}
    </GlobalContext.Provider>

    )

}

export const useWeatherContext = () => useContext(GlobalContext)

export default WeatherContext