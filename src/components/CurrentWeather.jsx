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
            className="border-bottom"
            onClick={() => {
              dispatch(addLat(data.coord.lat));
              dispatch(addLon(data.coord.lon));
              dispatch(addName(data.name));
              history.push("/details/" + data?.name);
            }}
          >
            {data?.name + " , " + data?.sys.country}
          </h1>
          <Row>
            <Col xm={12} md={4} className="border-right">
              <h3>{data?.weather[0].description}</h3>
              <img
                src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
              <h2>{data?.main.temp + "°C"}</h2>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default withRouter(CurrentWeather);
