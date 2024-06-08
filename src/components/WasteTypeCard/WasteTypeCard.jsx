import "./WasteTypeCard.scss";

function WasteTypeCard (){

  return (
    <div className="waste-type-card">
      <div className="waste-type-card__image"></div>
      <div className="waste-type-card__content">
        <h3 className="waste-type-card__title">Waste Type</h3>
        <p className="waste-type-card__description">Description</p>
      </div>
    </div>
  )
}

export default WasteTypeCard;