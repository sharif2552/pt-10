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
        {/* Year 2024 */}
        <div className="year2024">
          <div className="cursor-pointer" onClick={() => toggleYear(2024)}>
            <h2 className="text-black dark:text-white text-6xl mb-5 mt-10 text-blue-800">
              RoadMap
            </h2>
          </div>
          {visibleYear === 2024 && (
            <div className="q1Timeline">
              <div className="timeline">
                {/* First row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white mb-2 text-2xl font-bold">
                    Mynth Liquid Staking
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Mynth offers Liquid Staking for Chameleon, MNT, and MyUSD
                    holders, earning compounded rewards every five days (epoch).
                    All with full assets custody and no locking.
                  </p>
                </div>

                {/* Second row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white mb-2 text-2xl font-bold">
                    Mynth Streaming Swaps
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Streaming Swaps break orders into smaller portions to avoid
                    excess fees or slippage. This allows you to trade larger
                    amounts of MyUSD worry-free.
                  </p>
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
                  <h3 className="text-white mb-2 text-2xl font-bold">
                    Cardano and Polygon Integration
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Mynth is integrating Cardano with Polygon to enable direct
                    swaps between tokens on both networks, creating a more
                    interconnected cryptocurrency ecosystem.
                  </p>
                </div>

                {/* Fourth row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white mb-2 text-2xl font-bold">
                    USDC Available on Cardano
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Adding a 1:1 swap option for USDC with MyUSD and enhancing
                    stablecoin interoperability.
                  </p>
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
                  <h3 className="text-white mb-2 text-2xl font-bold">
                    Cardano and Solana
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Integrating Cardano with Solana to allow direct exchanges
                    between tokens on both networks.
                  </p>
                </div>

                {/* Sixth row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white mb-2 text-2xl font-bold">
                    Mynth CNT Swaps
                  </h3>
                  <p className="text-gray-300 text-lg">
                    We're making all Cardano Native Token exchanges seamless,
                    leveraging Cardano's decentralization.
                  </p>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>
              </div>

              <div className="timeline">
                {/* Seventh row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white mb-2 text-2xl font-bold">
                    Mynth DAO
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Governed by the MNT token, the DAO allows members to
                    influence the protocol’s direction by voting on key
                    initiatives, contributing to Mynth's future.
                  </p>
                </div>

                {/* Eighth row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white mb-2 text-2xl font-bold">
                    Cardano and Arbitrum Integration
                  </h3>
                  <p className="text-gray-300 text-lg">
                    We're linking Cardano with Arbitrum fostering a more
                    integrated cryptocurrency ecosystem.
                  </p>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>

                {/* Ninth row */}
                <div className="timeline-empty"></div>
                <div class="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white mb-2 text-2xl font-bold">
                    Cardano and Bitcoin Integration
                  </h3>
                  <p className="text-gray-300 text-lg">
                    This integration combines Bitcoin's security and market
                    presence with Cardano's advanced programmability, enhancing
                    the cryptocurrency environment.
                  </p>
                </div>

                {/* Tenth row */}
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white mb-2 text-2xl font-bold">
                    Mynth Savings Account
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Mynth Savings Account is a modern way to earn more rewards.
                    You maintain control of your funds at all times, with no
                    penalties or locking.
                  </p>
                </div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>

                {/* Eleventh row */}
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                  <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content dark:timeline-content-dark">
                  <h3 className="text-white mb-2 text-2xl font-bold">
                    Mynth Stable Insurance
                  </h3>
                  <p className="text-gray-300 text-lg">
                    We aim to protect MyUSD holders from unforeseen events.
                    Stables Insurance reflects our dedication to fortifying
                    MyUSD's robustness and providing you with peace of mind.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Timeline;
