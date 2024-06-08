import "./WasteTypeCard.scss";

function WasteTypeCard ({wasteType}){

  return (
    <div className="waste-type-card">
      <div className="waste-type-card__image"></div>
      <div className="waste-type-card__content">
        <h3 className="waste-type-card__title">{wasteType}</h3>
        <p className="waste-type-card__description">Description</p>
      </div>
    </div>
  )
}

export default WasteTypeCard;