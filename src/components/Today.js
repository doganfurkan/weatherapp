import { ApiKey, ApiUrl, ApiLocate } from "./Api";
import React, { useEffect, useState, useContext } from "react";
import {useWeatherContext} from "../context/Context";
const days = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

export default function Today() {
  const {setMenuopen, menuOpen} = useWeatherContext();
  const themeChange = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div id="left">
      <nav>
        <div id="search">
          <form action="#">
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
        <button id="openMenu" onClick={() => {setMenuopen("active")}}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      <section id="today">
        <div id="image">
          <img src="./weather.svg" alt="ad" />
        </div>
        <div id="stats">
          <div id="city">
            Istanbul, TR
          </div>
          <div id="degrees">
            25°C
          </div>
          <div id="desc">
            Clear
          </div>
          <div id="minmax">
            Feels Like: 24°C
          </div>
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
              <img
                className="lightmode"
                src="github-white.png"
                alt="github"
              />{" "}
              My Github
            </div>
            <div className="menuItem">
              {" "}
              <img
                className="darkmode"
                src="linkedin.png"
                alt="linkedin"
              />{" "}
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