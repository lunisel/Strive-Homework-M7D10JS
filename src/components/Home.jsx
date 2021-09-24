import { useEffect, useState } from "react";

const apiKey = "88ac6ac2aa7e480aac6181b2c46dc992";

const Home = () => {
  const [cityName, setCityName] = useState("Bologna");
  const [data, setData] = useState(null);

  const fetchCurrent = async () => {
    try {
      let response = await fetch(`
      http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}
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

  useEffect(() => {
    fetchCurrent();
  }, []);

  return (
    <div className="Home-container">
      <h1>HELLO</h1>
    </div>
  );
};

export default Home;
