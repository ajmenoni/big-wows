import { useState, useRef } from "react";
import PotatoForm from "./components/PotatoForm";
import BigRedWheel from "./components/BigRedWheel";
import Wings from "./components/Wings";
import { bestSpuds } from "./data/aSquad";

import "./App.css";
import BigSpud from "./components/BigSpud";
import Modal from "./components/Modal";
import LastPotatoModal from "./components/LastPotatoModal";
import { useSpinner } from "./hooks/useSpinner";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const [thisIsTheEnd, setThisIsTheEnd] = useState(false);
  const {
    sparkleIndex,
    bigWow,
    spin,
    setBigWow,
    setSparkleIndex,
    spud,
    fryThatSucker,
    risingFistOfFury,
  } = useSpinner();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    if (name === "BestSpuds") {
      squadUp();
      return;
    }
    setNames([...names, name.trim()]);
    clearInput();
  };

  function handleClearingBigRedWheel() {
    setNames([]);
  }

  function squadUp() {
    setNames([...names, ...bestSpuds]);
    clearInput();
  }

  const clearInput = () => {
    setName("");
  };

  const closeModal = (id) => {
    setBigWow(null);
    handleSparkleRemoval(id);
  };

  function closeLastPotato(id) {
    setThisIsTheEnd(false);
    removePotato(id);
  }

  function handleInput(e) {
    setName(e.target.value);
  }

  function handleSparkleRemoval(id) {
    setSparkleIndex((current) => {
      if (current === id || current >= names.length) {
        return null;
      }
      return current > id ? current - 1 : current;
    });
  }

  function removePotato(id) {
    const filteredPotatoes = names.filter((name, index) => index !== id);
    if (filteredPotatoes.length === 1) {
      setThisIsTheEnd(true);
    }
    setNames([...filteredPotatoes]);

    handleSparkleRemoval(id);
  }

  return (
    <>
      <h1>
        Big<span className="wows">Wows</span>
      </h1>

      <div className="container">
        <BigSpud setSpud={spud} shaking={fryThatSucker} />
      </div>

      <div className="container">
        <PotatoForm
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          name={name}
        />
      </div>

      <div className="container">
        <BigRedWheel names={names} sparkleIndex={sparkleIndex} />
      </div>

      {names.length > 1 && (
        <Wings
          spin={spin}
          names={names}
          clearTheWheel={handleClearingBigRedWheel}
        />
      )}

      {bigWow && (
        <Modal
          closeModal={closeModal}
          bigWow={bigWow}
          removePotato={removePotato}
          sparkleIndex={sparkleIndex}
        />
      )}

      {thisIsTheEnd && (
        <LastPotatoModal
          closeLastPotato={closeLastPotato}
          bigWow={names[names.length - 1]}
          lastPotatoIndex={names.length - 1}
        />
      )}

      {risingFistOfFury && (
        <img
          src={`${import.meta.env.BASE_URL}upfist.png`}
          alt="Fury Fist"
          className="rise-up"
        />
      )}
    </>
  );
}

export default App;
