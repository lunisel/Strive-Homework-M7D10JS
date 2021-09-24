import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const WeeklyWeather = ({ city }) => {
  useEffect(() => {
    console.log("DESCRIPTION ->", city);
  }, []);
  return (
    <Row className="w-100">
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[0].weather[0].description}</span>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[1].weather[0].description}</span>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[2].weather[0].description}</span>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[3].weather[0].description}</span>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[4].weather[0].description}</span>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[5].weather[0].description}</span>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[6].weather[0].description}</span>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[7].weather[0].description}</span>
      </Col>
    </Row>
  );
};

export default WeeklyWeather;
