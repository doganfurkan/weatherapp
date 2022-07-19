import React, { useContext, useEffect, useState } from "react";
import { useWeatherContext } from "../context/Context";

export default function Weekly() {
  const [day, setDay] = useState(0);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const saatlik = () => {
   let icerik = [];
   let d = new Date();
    for (let i = 0; i < 24; i++) {
      icerik.push( <div className="hourly">
      <div className="hour">{(d.getHours() + i)%24}:00</div>
      <div className="image">
        <img src="./cloud.png" alt="asd" />
      </div>
      <div className="degrees">{Math.round(Math.random()*40)}°C</div>
      <div className="wind">
        <img src="wind.png" alt="wind" /> {" "}
        {(Math.random()*10).toString().slice(0,4)} m/s
      </div>
    </div>);
    }

    return icerik;
  };

  useEffect(() => {
    let d = new Date();
    setDay(d.getDay() + 1);
  }, []);

  return (
    <div id="container">
      <div id="menunother">
        <div className="heading">Today's Hourly Forecast</div>
        <div id="other">
          <section id="hourly">
            <div id="hourlyForecast">
              {saatlik()}
            </div>
          </section>
        </div>
      </div>

      <div className="heading">Daily Forecast for Next Week</div>

      <div id="weekly">
        <div className="weekly">
          <div className="day">Tomorrow</div>
          <div className="derece">25°C</div>
          <div className="durum">Cloudy</div>
          <div className="img">
            <img src="./clouds.png" alt="sadd" />
          </div>
        </div>
        <div className="weekly">
          <div className="day">{days[day]}</div>
          <div className="derece">25°C</div>
          <div className="durum">Cloudy</div>
          <div className="img">
            <img src="./clouds.png" alt="sadd" />
          </div>
        </div>
        <div className="weekly">
          <div className="day">{days[(day + 1) % 7]}</div>
          <div className="derece">25°C</div>
          <div className="durum">Cloudy</div>
          <div className="img">
            <img src="./clouds.png" alt="sadd" />
          </div>
        </div>
        <div className="weekly">
          <div className="day">{days[(day + 2) % 7]}</div>
          <div className="derece">25°C</div>
          <div className="durum">Cloudy</div>
          <div className="img">
            <img src="./clouds.png" alt="sadd" />
          </div>
        </div>
        <div className="weekly">
          <div className="day">{days[(day + 3) % 7]}</div>
          <div className="derece">25°C</div>
          <div className="durum">Cloudy</div>
          <div className="img">
            <img src="./clouds.png" alt="sadd" />
          </div>
        </div>
        <div className="weekly">
          <div className="day">{days[(day + 4) % 7]}</div>
          <div className="derece">25°C</div>
          <div className="durum">Cloudy</div>
          <div className="img">
            <img src="./clouds.png" alt="sadd" />
          </div>
        </div>
      </div>

      <p>Have a great day y’all! No matter how the weather is.</p>
    </div>
  );
}
