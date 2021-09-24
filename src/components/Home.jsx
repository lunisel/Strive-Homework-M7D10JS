import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import CurrentWeather from "./CurrentWeather";

const apiKey = "88ac6ac2aa7e480aac6181b2c46dc992";

const Home = () => {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState(null);

  const fetchCurrent = async () => {
    try {
      let response = await fetch(`
      http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}
        `);
      if (response.ok) {
        console.log("Response is ok");
        let weather = await response.json();
        setData(weather);
        console.log(weather);
      } else {
        console.log("Error Error Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home-container">
      <div className="form-container">
        <Form.Control
          type="text"
          placeholder="Name of the city..."
          value={cityName}
          onChange={(e) => setCityName(e.currentTarget.value)}
          className="mr-3"
        />
        <Button variant="outline-secondary" onClick={() => fetchCurrent()}>
          Search
        </Button>
      </div>
      {data && <CurrentWeather data={data} />}
    </div>
  );
};

export default Home;
