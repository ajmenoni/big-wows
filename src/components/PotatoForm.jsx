function PotatoForm({ handleInput, handleSubmit, name }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        placeholder="Enter Thing"
        value={name}
        onChange={handleInput}
        required
      />
    </form>
  );
}
export default PotatoForm;
