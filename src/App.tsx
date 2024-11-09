import { useState, useEffect } from "react";
import documents1 from "./assets/documents1.png";
import fingerprint1 from "./assets/fingerprint1.png";
import graph1 from "./assets/graph1.png";
import highway1 from "./assets/highway1.png";
import lock from "./assets/lock.png";
import styles from "./onboarding.module.css";
import HeaderPhrases from "./headerPhrases";

const iconPositions = [
  { id: "documents1", angle: 0 },
  { id: "fingerprint1", angle: 90 },
  { id: "graph1", angle: 180 },
  { id: "highway1", angle: 270 },
];

export default function OnBoarding() {
  const [angle] = useState(0);

  const calculatePosition = (angle: number) => {
    const radians = (angle * Math.PI) / 180;
    const radius = 220;
    const x = 150 + radius * Math.cos(radians) - 50;
    const y = 150 + radius * Math.sin(radians) - 50;
    return { x, y };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://portfolio.jiacode.dev/";
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.relative}>
      <HeaderPhrases />
      <div className={styles.container}>
        <main className={styles.main}>
          <a href="https://portfolio.jiacode.dev/" style={{ outline: "none" }}>
            <div className={styles.circle}>
              <div className={styles.iconsContainer}>
                {iconPositions.map((icon) => {
                  const position = calculatePosition(icon.angle);
                  return (
                    <img
                      key={icon.id}
                      src={
                        icon.id === "documents1"
                          ? documents1
                          : icon.id === "fingerprint1"
                          ? fingerprint1
                          : icon.id === "graph1"
                          ? graph1
                          : icon.id === "highway1"
                          ? highway1
                          : lock
                      }
                      alt={icon.id}
                      width={100}
                      height={100}
                      className={styles.icon}
                      style={{
                        position: "absolute",
                        top: position.y,
                        left: position.x,
                        transform: `rotate(${angle}deg)`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </a>
        </main>
      </div>
    </div>
  );
}
