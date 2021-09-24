import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { addLat, addLon, addName } from "../actions";

const CurrentWeather = ({ data, history }) => {
  const dispatch = useDispatch();
  return (
    <div className="current-weather-cont mt-5">
      {data && (
        <>
          <h1
            className="border-bottom city-title"
            onClick={() => {
              dispatch(addLat(data.coord.lat));
              dispatch(addLon(data.coord.lon));
              dispatch(addName(data.name));
              history.push("/details/" + data?.name);
            }}
          >
            {data?.name + " , " + data?.sys.country}
          </h1>
          <Row className="mt-3">
            <Col xm={12} md={5} className="border-right">
              <h3>{data?.weather[0].description}</h3>
              <img
                src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                alt="weather-icon"
                className="icon"
              />
              <h2>{data?.main.temp + "°C"}</h2>
            </Col>
            <Col xm={12} md={7}>
              <p className="params">Min: {data?.main.temp_min} °C</p>
              <p className="params">Max: {data?.main.temp_max} °C</p>
              <p className="params">Humdity: {data?.main.humidity} %</p>
              <p className="params">Clouds: {data?.clouds.all} %</p>
              <p className="params">Wind speed: {data?.wind.speed} meter/sec</p>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default withRouter(CurrentWeather);
