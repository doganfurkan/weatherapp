import React from "react";

export default function Daily({ day, temp, desc, icon}) {
  return (
    <div className="weekly">
      <div className="day">{day}</div>
      <div className="derece">{temp}°C</div>
      <div className="durum">{desc}</div>
      <div className="img">
        <img src={`./icons/${icon}.png`} alt="ikon" />
      </div>
    </div>
  );
}
