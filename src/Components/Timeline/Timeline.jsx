import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./Timeline.css";

const data = [
  {
    img: require("../../Assets/img/timeline/liquid_staking-1.jpg"),
    title: "Mynth Liquid Staking",
    description:
      "Mynth has introduced Liquid Staking for Chameleon, MNT and MyUSD holders. Hold your assets, maintain full control and custody, and automatically earn compounded rewards each epoch (every five days). By keeping your assets securely in your wallet, you can avoid smart contract risks and now participate in the network’s growth through reward earnings. This not only empowers you with greater security and control, but also enhances the utility and attractiveness of holding Mynth’s native assets.",
  },
  {
    img: require("../../Assets/img/timeline/Streaming_swap-2.png"),
    title: "Mynth Streaming Swaps",
    description:
      "Mynth’s Streaming Swaps acts as a continuous and active exchange, strategically designed to fulfill large orders at the most advantageous prices. Unlike regular swaps that can cause losses in the form of excess fees or slippage, Streaming Swaps execute your order in smaller portions. This ensures your swaps get executed at the best possible rates, allowing you to buy or sell larger amounts of MyUSD without worries. You get the benefits from a seamless and efficient exchange within the Cardano ecosystem, where MyUSD is effortlessly collateralized and its supply automatically expanded, all without any manual intervention.",
  },
  {
    img: require("../../Assets/img/timeline/Polygon_Integration-3.png"),
    title: "Cardano and Polygon Integration",
    description:
      "Mynth is integrating Cardano with Polygon to enable direct and seamless swaps between tokens native to Cardano and those on the Polygon network. Polygon, known for its scalability and low transaction costs, complements Cardano’s secure and sustainable blockchain, facilitating a more interconnected cryptocurrency ecosystem. This further bolsters Mynth’s mission to achieve full interoperability among digital assets, simplifying transactions across blockchains.",
  },
  {
    img: require("../../Assets/img/timeline/available_on_Cardano-4.jpg"),
    title: "USDC Available on Cardano",
    description:
      "Mynth is broadening the horizon of stablecoin interoperability by extending the MyUSD to USDT swapping capability to include a 1:1 swap option for USDC. This expansion introduces USDC to the Cardano ecosystem, seamlessly integrating it as another collateral option for MyUSD. This not only diversifies the collateral base, reducing risk, but also reinforces Mynth’s commitment to making stable assets fully interoperable across blockchains. By enabling a direct pathway for swapping MyUSD with USDC, Mynth is enhancing liquidity, stability, and user flexibility.",
  },
  {
    img: require("../../Assets/img/timeline/Solana_Integration-5.png"),
    title: "Cardano and Solana",
    description:
      "Mynth is expanding its interoperability capabilities by integrating Cardano with Solana, enabling direct and frictionless exchanges between tokens native to Cardano and those within the Solana ecosystem. Solana is celebrated for its high throughput and minimal transaction fees, which perfectly aligns with Cardano’s emphasis on security and eco-friendliness, thus fostering a more unified and efficient cryptocurrency network. This move strengthens Mynth’s commitment to realizing complete interoperability among digital assets, streamlining cross-blockchain transactions.",
  },
  {
    img: require("../../Assets/img/timeline/Mynth_CNT_Swaps-6.png"),
    title: "Mynth CNT Swaps",
    description: "Detailed description for Mynth CNT Swaps.",
  },
  {
    img: require("../../Assets/img/timeline/article-DAO-7.jpg"),
    title: "Mynth DAO",
    description: "Detailed description for Mynth DAO.",
  },
  {
    img: require("../../Assets/img/timeline/Mynth_Arbitrum_Integration-8.png"),
    title: "Cardano and Arbitrum Integration",
    description: "Detailed description for Cardano and Arbitrum Integration.",
  },
  {
    img: require("../../Assets/img/timeline/Bitcoin_Integration-9.png"),
    title: "Cardano and Bitcoin Integration",
    description: "Detailed description for Cardano and Bitcoin Integration.",
  },
  {
    img: require("../../Assets/img/timeline/MyUSD_Saving_Account-10.jpg"),
    title: "Mynth Savings Account",
    description: "Detailed description for Mynth Savings Account.",
  },
  {
    img: require("../../Assets/img/timeline/Stable_Insurance-11.jpg"),
    title: "Mynth Stable Insurance",
    description: "Detailed description for Mynth Stable Insurance.",
  },
];

const briefDescriptions = [
  {
    title: "Mynth Liquid Staking",
    description:
      "Mynth offers Liquid Staking for Chameleon, MNT, and MyUSD holders, earning compounded rewards every five days (epoch). All with full assets custody and no locking.",
  },
  {
    title: "Mynth Streaming Swaps",
    description:
      "Streaming Swaps break orders into smaller portions to avoid excess fees or slippage. This allows you to trade larger amounts of MyUSD worry-free.",
  },
  {
    title: "Cardano and Polygon Integration",
    description:
      "Mynth is integrating Cardano with Polygon to enable direct swaps between tokens on both networks, creating a more interconnected cryptocurrency ecosystem.",
  },
  {
    title: "USDC Available on Cardano",
    description:
      "Adding a 1:1 swap option for USDC with MyUSD and enhancing stablecoin interoperability.",
  },
  {
    title: "Cardano and Solana",
    description:
      "Integrating Cardano with Solana to allow direct exchanges between tokens on both networks.",
  },
  {
    title: "Mynth CNT Swaps",
    description:
      "We're making all Cardano Native Token exchanges seamless, leveraging Cardano's decentralization.",
  },
  {
    title: "Mynth DAO",
    description:
      "Governed by the MNT token, the DAO allows members to influence the protocol’s direction by voting on key initiatives, contributing to Mynth's future.",
  },
  {
    title: "Cardano and Arbitrum Integration",
    description:
      "We're linking Cardano with Arbitrum fostering a more integrated cryptocurrency ecosystem.",
  },
  {
    title: "Cardano and Bitcoin Integration",
    description:
      "This integration combines Bitcoin's security and market presence with Cardano's advanced programmability, enhancing the cryptocurrency environment.",
  },
  {
    title: "Mynth Savings Account",
    description:
      "Mynth Savings Account is a modern way to earn more rewards. You maintain control of your funds at all times, with no penalties or locking.",
  },
  {
    title: "Mynth Stable Insurance",
    description:
      "We aim to protect MyUSD holders from unforeseen events. Stables Insurance reflects our dedication to fortifying MyUSD's robustness and providing you with peace of mind.",
  },
];

const TimelineItem = ({ item, briefDescription, onClick }) => {
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
      onClick={() => onClick(item)}
    >
      <h3 className="text-white mb-2 text-2xl font-bold">
        {briefDescription.title}
      </h3>
      <p className="text-gray-300 text-lg">{briefDescription.description}</p>
    </motion.div>
  );
};

const TimelinePopup = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg relative w-1/2">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={item.img} alt={item.title} className="mb-4" />
        <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="dark:bg-[#14102C]">
      <section className="design-section">
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
                item={data[0]}
                briefDescription={briefDescriptions[0]}
                onClick={handleClick}
              />

              {/* Second row */}
              <TimelineItem
                item={data[1]}
                briefDescription={briefDescriptions[1]}
                onClick={handleClick}
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
                item={data[2]}
                briefDescription={briefDescriptions[2]}
                onClick={handleClick}
              />

              {/* Fourth row */}
              <TimelineItem
                item={data[3]}
                briefDescription={briefDescriptions[3]}
                onClick={handleClick}
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
                item={data[4]}
                briefDescription={briefDescriptions[4]}
                onClick={handleClick}
              />

              {/* Sixth row */}
              <TimelineItem
                item={data[5]}
                briefDescription={briefDescriptions[5]}
                onClick={handleClick}
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
                item={data[6]}
                briefDescription={briefDescriptions[6]}
                onClick={handleClick}
              />

              {/* Eighth row */}
              <TimelineItem
                item={data[7]}
                briefDescription={briefDescriptions[7]}
                onClick={handleClick}
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
                item={data[8]}
                briefDescription={briefDescriptions[8]}
                onClick={handleClick}
              />

              {/* Tenth row */}
              <TimelineItem
                item={data[9]}
                briefDescription={briefDescriptions[9]}
                onClick={handleClick}
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
                item={data[10]}
                briefDescription={briefDescriptions[10]}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </section>
      {selectedItem && (
        <TimelinePopup item={selectedItem} onClose={closePopup} />
      )}
    </div>
  );
};

export default Timeline;
