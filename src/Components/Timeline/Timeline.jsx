import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./Timeline.css";

const TimelineItem = ({ title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="timeline-component timeline-content dark:timeline-content-dark"
    >
      <h3 className="text-white mb-2 text-2xl font-bold">{title}</h3>
      <p className="text-gray-300 text-lg">{description}</p>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <div className="dark:bg-[#14102C]">
      <section className="design-section">
        {/* Year 2024 */}
        <div className="year2024">
          <h2 className="text-black dark:text-white text-6xl mb-5 mt-10 text-blue-800">
            RoadMap
          </h2>
          <div className="q1Timeline">
            <div className="timeline">
              {/* First row */}
              <div className="timeline-empty"></div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <TimelineItem
                title="Mynth Liquid Staking"
                description="Mynth offers Liquid Staking for Chameleon, MNT, and MyUSD holders, earning compounded rewards every five days (epoch). All with full assets custody and no locking."
              />

              {/* Second row */}
              <TimelineItem
                title="Mynth Streaming Swaps"
                description="Streaming Swaps break orders into smaller portions to avoid excess fees or slippage. This allows you to trade larger amounts of MyUSD worry-free."
              />
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-empty"></div>

              {/* Third row */}
              <div className="timeline-empty"></div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <TimelineItem
                title="Cardano and Polygon Integration"
                description="Mynth is integrating Cardano with Polygon to enable direct swaps between tokens on both networks, creating a more interconnected cryptocurrency ecosystem."
              />

              {/* Fourth row */}
              <TimelineItem
                title="USDC Available on Cardano"
                description="Adding a 1:1 swap option for USDC with MyUSD and enhancing stablecoin interoperability."
              />
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-empty"></div>

              {/* Fifth row */}
              <div className="timeline-empty"></div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <TimelineItem
                title="Cardano and Solana"
                description="Integrating Cardano with Solana to allow direct exchanges between tokens on both networks."
              />

              {/* Sixth row */}
              <TimelineItem
                title="Mynth CNT Swaps"
                description="We're making all Cardano Native Token exchanges seamless, leveraging Cardano's decentralization."
              />
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
              <TimelineItem
                title="Mynth DAO"
                description="Governed by the MNT token, the DAO allows members to influence the protocol’s direction by voting on key initiatives, contributing to Mynth's future."
              />

              {/* Eighth row */}
              <TimelineItem
                title="Cardano and Arbitrum Integration"
                description="We're linking Cardano with Arbitrum fostering a more integrated cryptocurrency ecosystem."
              />
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-empty"></div>

              {/* Ninth row */}
              <div className="timeline-empty"></div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <TimelineItem
                title="Cardano and Bitcoin Integration"
                description="This integration combines Bitcoin's security and market presence with Cardano's advanced programmability, enhancing the cryptocurrency environment."
              />

              {/* Tenth row */}
              <TimelineItem
                title="Mynth Savings Account"
                description="Mynth Savings Account is a modern way to earn more rewards. You maintain control of your funds at all times, with no penalties or locking."
              />
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-empty"></div>

              {/* Eleventh row */}
              <div className="timeline-empty"></div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <TimelineItem
                title="Mynth Stable Insurance"
                description="We aim to protect MyUSD holders from unforeseen events. Stables Insurance reflects our dedication to fortifying MyUSD's robustness and providing you with peace of mind."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
