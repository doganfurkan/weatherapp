import { ApiKey, ApiUrl } from "./Api";
//import React, { useEffect, useState, useContext } from "react";
import { useWeatherContext } from "../context/Context";

export default function Today() {
  const { setMenuopen, menuOpen, weatherData, setWeatherData } =
    useWeatherContext();
  const themeChange = () => {
    document.body.classList.toggle("dark");
  };

  var datam = {};

  const work = (e) => {
    e.preventDefault();
    try {
      fetch(
        `${ApiUrl}weather?q=${e.target.cityName.value}&appid=${ApiKey}&units=metric&lang=en`
      )
        .then((weather) => {
          return weather.json();
        })
        .then((gelen) => {
          console.log(gelen);
          if (gelen.cod === 200) {
            datam = {
              degrees: Math.round(gelen.main.temp),
              description: gelen.weather[0].description,
              feels_like: gelen.main.feels_like,
              city: `${e.target.cityName.value}, ${gelen.sys.country}`,
              min: gelen.main.temp_min,
              max: gelen.main.temp_max,
              icon: gelen.weather[0].icon,
              lat: gelen.coord.lat,
              lon: gelen.coord.lon,
            };
          } else {
            alert("Couldn't get the data");
          }
        })
        .then(() => {
          console.log(datam);
          fetch(
            `${ApiUrl}forecast?lat=${datam.lat}&lon=${datam.lon}&units=metric&appid=${ApiKey}&lang=tr`
          )
            .then((fivedays) => fivedays.json())
            .then((veri) => {
              console.log(veri);
              datam.hourly = [];
              if (veri.cod === "200") {
                for (let i = 0; i < 8; i++) {
                  datam.hourly[i] = veri.list[i];
                }
                console.log(datam);
              }
            })
            .then(() => {
              datam.daily = [];
              fetch(
                `${ApiUrl}onecall?lat=${datam.lat}&lon=${datam.lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${ApiKey}&lang=en`
              )
                .then((donus) => donus.json())
                .then((yanit) => {
                  console.log(yanit);
                  for (let i = 0; i < 6; i++) {
                    datam.daily[i] = {};
                    datam.daily[i]["temp"] = yanit.daily[i + 1].temp.day;
                    console.log("1");
                    datam.daily[i].desc =
                      yanit.daily[i + 1].weather[0].description;
                    datam.daily[i].icon = yanit.daily[i + 1].weather[0].icon;
                    datam.daily[i].dt = yanit.daily[i + 1].dt;
                  }
                });
            })
            .then(() => {
              console.log(datam);
              setWeatherData(datam);
            });
          //
        });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div id="left">
      <nav>
        <div id="search">
          <form onSubmit={work}>
            <input
              type="text"
              id="searchInput"
              name="cityName"
              placeholder="Enter City Name"
              required
            />
            <button id="searchButton">
              <span className="material-symbols-outlined">search</span>
            </button>
          </form>
        </div>
        <button
          id="openMenu"
          onClick={() => {
            setMenuopen("active");
          }}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      <section id="today">
        <div id="city">{weatherData.city}</div>
        <div id="image">
          <img alt="weather_icon" src={`/icons/${weatherData.icon}.png`} />
        </div>
        <div id="stats">
          <div id="degrees">{weatherData.degrees}°C</div>
          <div id="minmax">
            {weatherData.min}°C / {weatherData.max}°C
          </div>
          <div id="desc">{weatherData.description}</div>
          <div id="feels">Feels Like: {weatherData.feels_like}°C</div>
        </div>
      </section>

      <div id="menu" className={menuOpen}>
        <div id="menuIc">
          <div
            className="menuItem themeButton"
            onClick={() => {
              themeChange();
            }}
          >
            <span className="material-symbols-outlined darkmode">
              dark_mode
            </span>
            <b className="darkmode">Dark Mode</b>
            <span className="material-symbols-outlined lightmode">
              light_mode
            </span>
            <b className="lightmode">Light Mode</b>
          </div>
          <div className="menuItem hidden">
            <span className="material-symbols-outlined">link</span>
            My Website
          </div>
          <div className="menuItem">
            {" "}
            <img className="darkmode" src="github.png" alt="github" />
            <img className="lightmode" src="github-white.png" alt="github" /> My
            Github
          </div>
          <div className="menuItem">
            {" "}
            <img className="darkmode" src="linkedin.png" alt="linkedin" />{" "}
            <img
              className="lightmode"
              src="linkedin-white.png"
              alt="linkedin"
            />
            My Linkedin
          </div>
          <button
            id="closeMenu"
            onClick={() => {
              setMenuopen("notActive");
            }}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
