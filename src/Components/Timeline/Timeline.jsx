import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div>
      <section className="design-section">
        <h1 className=" text-center">RoadMap</h1>
        <div className="timeline">
          <div className="timeline-empty"></div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-component timeline-content">
            <h3>HTML</h3>
            <p>Some Text</p>
          </div>
          <div className="timeline-component timeline-content">
            <h3>CSS</h3>
            <p>Some Text.</p>
          </div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>
          <div className="timeline-empty"></div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-component timeline-content">
            <h3>Javascript</h3>
            <p>Some Text.</p>
          </div>
        </div>

        {/* Second Time Line */}
        <div className="timeline">
          <div className="timeline-component timeline-content"></div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>

          <div className="timeline-empty"></div>
          <div className="timeline-component timeline-content">
            <h3>CSS</h3>
            <p>Some Text.</p>
          </div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>
          <div className="timeline-empty"></div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-component timeline-content">
            <h3>Javascript</h3>
            <p>Some Text.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
