import "./InstructionModal.scss";

function InstructionModal({ data, handleModalClose }) {
  return (
    <div className="modal">
      <div className="modal__popup">
        <button className="modal__btn" onClick={handleModalClose}>X</button>
        <h2 className="modal__header">{data.productName}</h2>
        <h4 className="modal__subheader">Type: 
          <span className="modal__text">{data.type}</span>
        </h4>
        <div className="modal__stats">
        <h4 className="modal__subheader modal__subheader--stats">Recycle: 
          <p className={(data.recyclable.toLowerCase() === "high") ? "modal__high": "modal__low"}>
            {data.recyclable}
            </p>
        </h4>
        <h4 className="modal__subheader modal__subheader--stats">Reuse:
          <p className={(data.reusable.toLowerCase() === "high") ? "modal__high": "modal__low"}>
            {data.reusable}
          </p>
        </h4>
        <h4 className="modal__contribution">Landfill contribution: 
          <span className="modal__text">{data.contribution} g</span>
        </h4>
        </div>
        <h4 className="modal__subheader">Disposal location:
          <p className="modal__text">{data.designation}</p> 
        </h4>
        <h4 className="modal__subheader">Instructions: 
          <p className="modal__text">{data.instruction}</p>
        </h4>
        
        
      </div>
    </div>
  );
}
export default InstructionModal;
