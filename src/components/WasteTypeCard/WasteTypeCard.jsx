import "./WasteTypeCard.scss";

function WasteTypeCard ({item}){

   return (
    <div className="info-card">
    <div class="info-card__header">
        <h2 class="info-card__title">{item.name}</h2>
    </div>
    <div class="info-card__info">
        <p> {item.going_to_landfill} % of {item.name} go to landfill</p>
    </div>

      <p class="info-card__description">
        <h4>How {item.name} circulate?</h4>
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