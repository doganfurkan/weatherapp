import "./App.css";
import Today from "./components/Today";
import Weekly from "./components/Weekly";
import { useWeatherContext } from './context/Context';

function App() {
  const { noData ,
    setNoData,
    weatherCurrent , 
    setWeatherCurrent,
    city,
    setCity,
    weatherIcon ,
    setWeatherIcon,
    weatherDaily , 
    setWeatherDaily} = useWeatherContext();


  return (
    <>
        <Today/>
        <Weekly />
    </>
  );
}

export default App;
