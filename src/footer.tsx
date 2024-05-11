import React, { useState, useEffect, useMemo, useRef } from "react";
import styles from "./onboarding.module.css";

const Footer: React.FC = () => {
  const phrases = useMemo(
    () => [
      "Usted está ingresando al sistema de JIA Code.",
      "Por favor, espere un momento.",
      "Sentado.",
      "O acostado, si prefiere.",
      "O de pie, si es lo que le gusta.",
      "O bailando, si es lo que le hace feliz.",
      "O saltando, si es lo que le divierte.",
      "O... bueno, ",
      "O... bueno, usted entiende.",
    ],
    []
  );

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrasesRef = useRef(phrases);

  useEffect(() => {
    phrasesRef.current = phrases;
  }, [phrases]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex(
        (prevIndex) => (prevIndex + 1) % phrasesRef.current.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
      <div className={styles.phraseContainer}>
        {phrasesRef.current.map((phrase, index) => (
          <p
            key={index}
            className={`${styles.phrase} ${
              index === currentPhraseIndex ? styles.active : ""
            }`}
          >
            {phrase}
          </p>
        ))}
      </div>
  );
}

export default Footer;
