import { useState } from "react";

export default function Wings({ spin, names, clearTheWheel }) {
  const [mood, setMood] = useState("😐");
  function runMoodSequence() {
    setMood("😐");
    setTimeout(() => setMood("🤢"), 1000);
    setTimeout(() => setMood("🤮"), 2000);
    setTimeout(() => setMood("😐"), 3000);
    setTimeout(() => clearTheWheel(), 4000);
  }

  return (
    <>
      <button onClick={() => spin(names)} disabled={names.length === 0}>
        Spin
      </button>
      <span
        className="reset"
        onClick={() => {
          runMoodSequence();
        }}
      >
        {mood}
      </span>
    </>
  );
}
