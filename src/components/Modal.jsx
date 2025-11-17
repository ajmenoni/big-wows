import { useRef } from "react";
import { wingString } from "../data/wingStrings";
import { buttonStrings } from "../data/buttonStrings";
import { cookThatTater } from "../data/cookThatTater";
import { useMemo } from "react";

export default function Modal({
  closeModal,
  bigWow,
  removePotato,
  sparkleIndex,
}) {
  const modalRef = useRef();
  const wingMsg = useMemo(() => wingString[rando(wingString)], []);
  const closeString = useMemo(() => buttonStrings[rando(buttonStrings)], []);
  const cookEm = useMemo(() => cookThatTater[rando(cookThatTater)], []);

  function animateClose(sparkleIndex) {
    const element = modalRef.current;
    if (!element) return;

    element.classList.add("banishing");

    element.addEventListener(
      "animationend",
      () => {
        closeModal(sparkleIndex);
      },
      { once: true }
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <h2>{wingMsg}</h2>
        <p className="bigWow-name">{bigWow}</p>
        <div className="modal-butts">
          <button
            onClick={() => {
              animateClose(sparkleIndex);
            }}
          >
            {closeString}
          </button>
          <button
            onClick={() => {
              removePotato(sparkleIndex);
              animateClose();
            }}
          >
            {cookEm}
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
