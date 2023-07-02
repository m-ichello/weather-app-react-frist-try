import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    temperature: "12",
    date: "Tuesday 10:00",
    description: "Sunny",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAkFBMVEX////5rgAAAADAwMD/tAAjIyPn5+fr6+v7+/v/sgDZ2dn29vaWlpbW1tbHjAD8sAC2trYzMzNzc3MJCQlqamqDg4NYWFh5eXkbGxs7OzvJyckoHABTOgBtTACJYACndQC2fwDqpAA4JwB+WQCmpqZDLgCebwDRkgAUDQBLNQAsLCzgngCenp5PT08TExNCQkKK4ov/AAAEMklEQVRoge1baXeiMBS1EJBFBYS6K8Val1Hr//93QxJiQQJkqX1z5vR+05BckrcmefR6yggtK1TvrQ7PyOEBEJuY2Pwl/iVWRX+oSjzs6/AODCNSI44MY6DOa+Oxm/q3Eg9wo61H3NS/jbi1owjGuP9YnritnxDomy9kiRe6Ey5kdXXkiJ1rm26IwYnxGNwg1M+bYq7NhLhPzH1bcZBBLJ/XNEwSrpX7VuPLyuCGR3mV6fGKezSavzCGhmTcJXHaaPZ4wiCmMRF/fqJrSgz9TzwSV8o8+PjpTy1HzXDB6iX+uKVtSgzOdDaXkfF8NtU0pTt462x7w8Vi6PHck7BYZF/DHCRE7hSzZGA+i6oE+zI3OIguWp65C05447FSzMPvkuwj/N2fZlqMP5enLHkYfVEsV+tN+pYj3axXy9KKq3hou1VK9pUNflztD9kLQi4BQi/ZYb86stZrq+HxOPLIO26m3rGBt+kZoSB4KSEIEDqnW/bErpl2zHEtfdJpwNcPPykGPY1cVCG9k7vu6FQ8lPAl7ZCkwnh0pjQIGTFPSLZVzHaEXB4rhYtGxawt3sqFMW2shS2mOlGtZVG0pG20lDotHq1laUNmh5w4PWBCehC1Sf/9yFA7LQbKPujT1VysP2Zjc6OHzZrjsqiL+b4HXNnWZB281+bsXD75UyqRMJuZfr0N/WMvMN1i0nva44tjyiyNnybTlwupHs2YYtLELRevKG/OTAV9TxD9Gf3d4VF9kqrN2c9EmvfOnLAxSFR57fam3sSwmPvZSa5zZbWZJ/EsYyKWSNxfjiaM75K8OTPVMK82oCiIrn0IqXMVAbGqqywfA9lFGJkKcUa6Ku4m/EhesRiogkVq8Zlo1laJN2felvVLCg7JN0Yd/rkJ7ohMWSUbIhI+KU44n/JJVco3nQmzKd/keYmT3irz5szbqssWxUVdpSmoYl+kibEtHc8KNswQnI9lry8KsttcaUw4n/IKjyFryqZKdHgg3tdzkW6QROigsdL5Wh8ak50W4EC8VHHTJeJsWQ7LgsBp0kqHFgMLeSZJjFdprSXiXMhrPIocL3EfG13iTasL8cwS2AaD5B6pht/CcNNyHtIv83gs2jPExT6C7GjedInf8ChsxLhCFPasym+mhIvvIy6y6aTKY8ERgy01mHLBmRMfUA6kh3daIC4TLEiAhUWwRAAs9QFL9uDSW7CEHmwLA7dpA9umgm3M4Y4iwA5ffv646bsO2OzagK0AOlIEOkSFOjYGOiiHuhpougwpmJ92GQJ1/QN24aV7xYdUr/jALjXhrnE78bSL6074uxI1D9HuWdURrcUJt6cVJxDAlGNQ/GABClDJDViREVRZFVghGVTpHFixIPFWAOWRUAWhYCWwUEW/YGXOUIXdYKXsYMX7YJ8rwH2g0Yb/9FuYX+J/gRjsYzrNzwf/AjSfXT/nOrLAAAAAAElFTkSuQmCC",
    humidity: "20",
    wind: "5",
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type in a city ..."
              className="form-control"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li> Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={weatherData.img} alt={weatherData.description} />
            <div>
              <strong>{weatherData.temperature}C°</strong>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
