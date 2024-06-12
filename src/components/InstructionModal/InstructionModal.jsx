import "./InstructionModal.scss";

function InstructionModal({ data, handleModalClose }) {
  return (
    <div className="modal">
      <div className="modal__popup">
        <button className="modal__button" onClick={handleModalClose}>X</button>
        <h3>{data.productName}</h3>
        <p>Type: <span>{data.type}</span></p>
        <p>Disposal location:<span>{data.designation}</span> </p>
        <p>Instructions: <span>{data.instruction}</span></p>
        <p>Recycle: {data.recyclable}</p>
        <p>Reuse:{data.reusable}</p>
        <p>Landfill contribution: {data.contribution} g</p>
      </div>
    </div>
  );
}
export default InstructionModal;
