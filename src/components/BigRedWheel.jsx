export default function BigRedWheel({ names, sparkleIndex }) {
  return (
    <div className="dont-tap-the-class">
      {names.map((name, i) => (
        <div
          key={i}
          id={i}
          className={`slot-row ${sparkleIndex === i ? "sparkle" : ""}`}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
