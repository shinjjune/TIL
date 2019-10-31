import React from "react";
import StateIcon from "./StateIcon";
import "./Current.css";

const Current = props => {
  const { name, dt, weather, main, wind, rain, snow } = props.current;
  const { unit, setUnit } = props;
  const time = new Date(dt * 1000);
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const changeUnit = () => {
    setUnit(unit === "C" ? "F" : "C");
  };
  return (
    <>
      <section>
        <h1 className="text-muted padding-left">{name}</h1>
        <article className="contents text-muted">
          <time>
            {`(${day[time.getDay()]}요일)`}
            {time.toLocaleDateString()}
          </time>
          <p>{weather[0].description}</p>
        </article>
      </section>
      <section className="grid-contents">
        <article className="weather">
          <StateIcon icon={weather[0].icon} />
          <p className="temperature">
            {unit === "C"
              ? Math.round(main.temp)
              : Math.round((main.temp * 9) / 5 + 32)}
          </p>
          <section className="units">
            <span
              className={unit === "C" ? null : "clickable"}
              onClick={unit === "C" ? null : changeUnit}
            >
              °C
            </span>

            <span
              className={unit === "F" ? null : "clickable"}
              onClick={unit === "F" ? null : changeUnit}
            >
              °F
            </span>
          </section>
        </article>
        <article className="additional-info">
          <p>{rain && `강수량: ${rain["1h"]}(1h)`}</p>
          <p>{snow && `적설량: ${snow["1h"]}(1h)`}</p>
          <p>습도: {main.humidity}%</p>
          <p>풍속: {wind.speed}m/s</p>
        </article>
      </section>
    </>
  );
};

export default Current;
