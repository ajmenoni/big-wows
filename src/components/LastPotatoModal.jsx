export default function LastPotatoModal({
  closeLastPotato,
  bigWow,
  lastPotatoIndex,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p className="bigWow-name">{bigWow} is the last. It's over.</p>
        <button
          onClick={() => {
            {
              closeLastPotato(lastPotatoIndex);
            }
          }}
        >
          And so it is...
        </button>
      </div>
    </div>
  );
}
