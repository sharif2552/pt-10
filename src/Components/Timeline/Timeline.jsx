import React, { useState } from "react";
import "./Timeline.css";

const Timeline = () => {
  const [visibleYear, setVisibleYear] = useState(null);

  const toggleYear = (year) => {
    setVisibleYear(visibleYear === year ? null : year);
  };

  return (
    <div className="dark:bg-[#14102C]">
      <section className="design-section">
        <h1 className="text-center text-black dark:text-white text-7xl mb-5">
          RoadMap
        </h1>

        {/* Year 2024 */}
        <div className="year2024">
          <div className="cursor-pointer" onClick={() => toggleYear(2024)}>
            <h2 className="text-black dark:text-white text-6xl mb-5 mt-10">2024</h2>
          </div>
          {visibleYear === 2024 && (
            <div className="q1Timeline">
              <h3 className="text-black dark:text-white text-4xl mb-5">Q1</h3>
              <div className="timeline">
                {/* First row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">Mynth Liquid Staking</h3>
                </div>

                {/* Second row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">MyUSD {">"} ADA</h3>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>

                {/* Third row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">ADA {">"} MyUSD</h3>
                </div>

                {/* Fourth row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">Polygon Integration</h3>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>

                {/* Fifth row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">USDC {">"} MyUSD</h3>
                </div>

                {/* Sixth row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">MyUSD {">"} USDC</h3>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>
              </div>
            </div>
          )}

          {/* Q2 timeline */}
          {visibleYear === 2024 && (
            <div className="q2Timeline">
              <h3 className="text-black dark:text-white text-4xl my-5">Q2</h3>
              <div className="timeline">
                {/* First row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  Solana Integration
                </div>

                {/* Second row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">CNT {">"} USDT</h3>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>

                {/* Third row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">USDT {">"} CNT</h3>
                </div>

                {/* Fourth row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">CNT {">"} USDT</h3>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>

                {/* Fifth row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">Mynth DAO Voting</h3>
                </div>
              </div>
            </div>
          )}

          {/* Q3 timeline */}
          {visibleYear === 2024 && (
            <div className="q3Timeline">
              <h3 className="text-black dark:text-white text-4xl my-5">Q3</h3>
              <div className="timeline">
                {/* First row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  Arbitrum Integration
                </div>

                {/* Second row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">Bitcoin Integration</h3>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>
              </div>
            </div>
          )}

          {/* Q4 timeline */}
          {visibleYear === 2024 && (
            <div className="q4Timeline">
              <h3 className="text-black dark:text-white text-4xl my-5">Q4</h3>
              <div className="timeline">
                {/* First row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  Mynth Savings Account
                </div>

                {/* Second row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">Mynth Stable Insurance</h3>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>
              </div>
            </div>
          )}
        </div>

        {/* Year 2023 */}
        <div className="year2023">
          <div className="cursor-pointer" onClick={() => toggleYear(2023)}>
            <h2 className="text-black dark:text-white text-6xl mt-10 mb-5">
              2023
            </h2>
          </div>
          {visibleYear === 2023 && (
            <div className="q1Timeline_2">
              <h3 className="text-black dark:text-white text-4xl mb-5">Q4</h3>
              <div className="timeline">
                {/* First row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">iUSD {">"} USDT</h3>
                </div>

                {/* Second row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">Babel Fees</h3>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>

                {/* Third row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">Mynth Genesis</h3>
                </div>

                {/* Fourth row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">Mynth Stablecoin</h3>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>

                {/* Fifth row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">MyUSD {">"} USDT</h3>
                </div>

                {/* Sixth row */}

                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white">USDT {">"} MyUSD</h3>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Timeline;
