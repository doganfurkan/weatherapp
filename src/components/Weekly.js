// import React, { /*useContext,*/ useEffect, useState } from "react";
import { useWeatherContext } from "../context/Context";

export default function Weekly() {

  const { weatherData } = useWeatherContext();

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const gunle = (gunum) => {
    let datem = new Date(gunum);
    let day = datem.getDay();
    let cevap = days[(day + 6) %7]
    return cevap;
  };
  return (
    <div id="container">
      <div id="menunother">
        <div className="heading">Today's Hourly Forecast</div>
        <div id="other">
          <section id="hourly">
            <div id="hourlyForecast">
              {weatherData.hourly.map((item, index) => {
                    let basla = item.dt_txt.length - 8;
                    let lastFive = item.dt_txt.toString().substr(basla, 5);
                    return (
                      <div className="hourly" key={index}>
                        <div className="hour">{lastFive}</div>
                        <div className="image">
                          <img
                            src={`/icons/${item.weather[0].icon}.png`}
                            alt="weather"
                          />
                        </div>
                        <div className="degrees">
                          {Math.round(item.main.temp)}°C
                        </div>
                        <div className="wind">
                          <img
                            src="wind.png"
                            alt="wind"
                            style={{ transform: `rotate(${item.wind.deg}deg)` }}
                          />{" "}
                          {item.wind.speed} m/s
                        </div>
                      </div>
                    );
                  })}
            </div>
          </section>
        </div>
      </div>

      <div className="heading">Daily Forecast for Next Week</div>

      <div id="weekly">
        {weatherData.daily.map((item, index) => {
              return (
               <div className="weekly" key={index}>
                    <div className="day">
                      {gunle(item.dt * 1000)}
                    </div>
                    <div className="derece">
                    {Math.round(item.temp)}°F
                    </div>
                    <div className="durum">
                    {item.desc}
                    </div>
                    <div className="img">
                      <img src={`./icons/${item.icon}.png`} alt="icon" />
                    </div>
                </div>
              );
            })
          }
      </div>

      <p>Have a great day y’all! No matter how the weather is.</p>
    </div>
  );
}
