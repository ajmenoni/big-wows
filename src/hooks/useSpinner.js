import { useState, useRef } from "react";

export function useSpinner() {
  const spudArray = ["/potato.png", "/potatoBolt.png", "/potatoskin.png"];
  const [sparkleIndex, setSparkleIndex] = useState(null);
  const [bigWow, setBigWow] = useState(null);
  const [spud, setSpud] = useState(spudArray[0]);
  const [fryThatSucker, setFryThatSucker] = useState(false);
  const [risingFistOfFury, setRisingFistOfFury] = useState(false);
  const intervalRef = useRef(null);

  const spin = (names) => {
    if (!names || names.length === 0) return;

    let index = 0;
    let spudIndex = 0;
    let frameCount = 0;
    const spudFrameDelay = 3;
    const duration = 1700;
    const intervalTime = 70;
    const startTime = Date.now();

    clearInterval(intervalRef.current);

    setFryThatSucker(true);

    intervalRef.current = setInterval(() => {
      index = (index + 1) % names.length;

      setSparkleIndex(index);

      frameCount++;
      if (frameCount >= spudFrameDelay) {
        spudIndex = (spudIndex + 1) % spudArray.length;
        setSpud(spudArray[spudIndex]);
        frameCount = 0;
      }

      if (Date.now() - startTime >= duration) {
        clearInterval(intervalRef.current);
        const selectedIndex = Math.floor(Math.random() * names.length);
        setSparkleIndex(selectedIndex);

        setRisingFistOfFury(true);

        setTimeout(() => {
          setBigWow(names[selectedIndex]);
          setSpud(spudArray[0]);
          setFryThatSucker(false);
          setRisingFistOfFury(false);
        }, 700);
      }
    }, intervalTime);
  };

  return {
    sparkleIndex,
    bigWow,
    spin,
    setBigWow,
    setSparkleIndex,
    spud,
    fryThatSucker,
    risingFistOfFury,
  };
}
