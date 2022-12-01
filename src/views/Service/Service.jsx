import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

function Service() {
  return (
    <>
      <div id="Services" className="services">
        <h1>Skills && Tools </h1>
        <div className="boxes">
          <ServiceBox
            animation="fade-up"
            icon="fas fa-globe"
            heading=""
            text="HTML"
          />
          <ServiceBox
            animation="fade-up"
            icon="fas fa-code"
            heading=""
            text="CSS"
          />

          <ServiceBox
            animation="fade-up"
            icon="fas fa-bookmark"
            heading=""
            text="JAVASCRIPT "
          />
          <ServiceBox
            animation="fade-up"
            icon="fas fa-users"
            heading=""
            text=" React JS"
          />
          <ServiceBox
            animation="fade-up"
            icon="fas fa-video"
            heading=""
            text="Node"
          />
          <ServiceBox
            animation="fade-up"
            icon="fas fa-info-circle"
            heading=""
            text="Post man"
          />
        </div>
      </div>
    </>
  );
}

export default Service
