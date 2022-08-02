import { createContext , useContext, useState } from "react";
export const GlobalContext = createContext();

const WeatherContext = ({children}) => {

    const [menuOpen,setMenuopen] = useState("No Data Yet");
    const [weatherData, setWeatherData] = useState({
        city: "City Name",
        degrees:"##",
        description:  "How the weather is",
        feels_like: "##",
        min: "##",
        max: "##",
        icon: "02d",
        lat:30,
        lon:30,
        hourly: [{dt_txt: "2022-08-02 ##:00 fd",main:{temp:25},weather:{"0":{icon:"01d"}},wind:{deg:45,speed:5}}],
        daily:[{dt:1659171600,temp:25,desc:"Clear Sky",icon:"01d"},{dt:1659283600,temp:25,desc:"Clear Sky",icon:"01d"},{dt:1659371600,temp:25,desc:"Clear Sky",icon:"01d"},{dt:1659471600,temp:25,desc:"Clear Sky",icon:"01d"},{dt:1659491600,temp:25,desc:"Clear Sky",icon:"01d"},{dt:1659571600,temp:25,desc:"Clear Sky",icon:"01d"}]
    })
    const [searched, setSearched] = useState(false)

    const [isLoading, setLoading] = useState("loading");

    const [isMenuOpen, setMenuOpen] = useState("notActive");


    const values = {
        menuOpen ,
        setMenuopen,
        weatherData,
        setWeatherData,
        isLoading,
        setLoading,
        isMenuOpen,
        setMenuOpen,
        searched,
        setSearched
    }

    return (
    <GlobalContext.Provider value={values}>
        {children}
    </GlobalContext.Provider>

    )

}

export const useWeatherContext = () => useContext(GlobalContext)

export default WeatherContext