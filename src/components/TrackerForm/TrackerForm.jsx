import "./TrackerForm.scss";

function TrackerForm() {
  return (
    <form className="form">
      <div>
        <label htmlFor="date">
          <h3>Entry Date:</h3>
        </label>
        <input type="date" id="entryDate" name="entryDate" />
      </div>
      <div>
        <label className="form__label" htmlFor="wasteType">
          <h3> Waste Type:</h3>
        </label>
        <select id="wasteType" name="wasteType">
          <option value="Plastic">Plastic</option>
          <option value="Glass">Paper</option>
          <option value="Cardboard">Glass</option>
          <option value="Paper">Metal</option>
          <option value="Organic Waste">Organic Waste</option>
          <option value="Plastic Waste">Electronics</option>
          <option value="Hazardous Waste">Textile</option>
        </select>
      </div>
      <div>
      <label htmlFor="product">
        <h3>Product:</h3>
      </label>
      <input type="text" id="product" name="product" />
      </div>
  

      <label htmlFor="quantity">
        <h3>Quantity:</h3>
      </label>
      <input type="number" id="quantity" name="quantity" />

      <button className="">ADD</button>
    </form>
  );
}

export default TrackerForm;
