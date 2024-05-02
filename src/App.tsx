import { useState } from 'react'
import documents1 from './assets/documents1.png'
import fingerprint1 from "./assets/fingerprint1.png";
import graph1 from "./assets/graph1.png";
import highway1 from "./assets/highway1.png";
import lock from "./assets/lock.png";
import styles from "./onboarding.module.css";

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

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.circle}>
          <div className={styles.iconsContainer}>
            {iconPositions.map((icon) => {
              const position = calculatePosition(icon.angle);
              return (
                <a href="https://portfolio.jiacode.dev/">
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
                </a>
              );
            })}
          </div>
        </div>
        <footer className={styles.footer}>
          Usted está ingresando al sistema de JIA Code. <br />
          Por favor, espere un momento.
          <br />
          Sentado.
          <br />
          O acostado, si prefiere.
          <br />
          O de pie, si es lo que le gusta.
          <br />
          O bailando, si es lo que le hace feliz.
          <br />
          O saltando, si es lo que le divierte.
          <br />
          O... bueno, usted entiende.
          <br />
        </footer>
      </main>
    </div>
  );
}