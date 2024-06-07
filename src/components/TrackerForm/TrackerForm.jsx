import "./TrackerForm.scss";

function TrackerForm() {
  return (
    <form className="form">
      <div>
        <label for="date">Entry Date:</label>
        <input type="date" id="entryDate" name="entryDate" />
      </div>
      <div>
        <label className="form__label" for="wasteType">
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
      <label for="product">Product:</label>
      <input type="text" id="product" name="product" />
      </div>
  

      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" name="quantity" />

      <button>ADD</button>
    </form>
  );
}

export default TrackerForm;
