import { wingString } from "../data/wingStrings";
import { buttonStrings } from "../data/buttonStrings";
import { cookThatTater } from "../data/cookThatTater";

export default function Modal({
  closeModal,
  bigWow,
  removePotato,
  sparkleIndex,
}) {
  return (
    <div
      className="modal-overlay"
      onClick={() => {
        closeModal(sparkleIndex);
      }}
    >
      <div className="modal">
        <h2>{wingString[rando(wingString)]}</h2>
        <p className="bigWow-name">{bigWow}</p>
        <div className="modal-butts">
          <button
            onClick={() => {
              closeModal(sparkleIndex);
            }}
          >
            {buttonStrings[rando(buttonStrings)]}
          </button>
          <button
            onClick={() => {
              removePotato(sparkleIndex);
            }}
          >
            {cookThatTater[rando(cookThatTater)]}
          </button>
        </div>
      </div>
    </div>
  );
}

function rando(mesArray) {
  const indexValue = Math.floor(Math.random() * mesArray.length);
  return indexValue;
}
