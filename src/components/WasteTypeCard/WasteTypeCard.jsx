import "./WasteTypeCard.scss";

function WasteTypeCard ({item}){

   return (
    <div className="info-card">
    <div class="info-card__header">
        <h2 class="info-card__title">{item.name}</h2>
    </div>
    <div class="info-card__info">

        <bold>Contribution:</bold> {item.landfill_contribution} %
    </div>

      <p class="info-card__description">
        {item.process}
      </p>

      <div class="info-card__img">
        <img  
          className="info-card__img"
          src={`${process.env.REACT_APP_API_URL}${item.image}`} 
          alt={item.name}/>
      </div>
    </div>
  )
}

export default WasteTypeCard;