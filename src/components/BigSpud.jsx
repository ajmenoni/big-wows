export default function BigSpud({ setSpud, shaking }) {
  return (
    <img
      className={`spud ${shaking ? "fry-that-sucker" : ""}`}
      src={setSpud}
      alt="Spud"
    />
  );
}
