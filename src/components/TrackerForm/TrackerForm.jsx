import "./TrackerForm.scss";
import { useTrackProgress } from "../../utils/useFormHandler";

function TrackerForm() {
  const {  record,
    success,
    loading,
    error,
    handleRecordInput,
    handleRecordSubmit } = useTrackProgress();
  console.log(record);
  return (
    <>
      <form className="progress-form" onSubmit={handleRecordSubmit}>
        <div className="progress-form__container">
          <label htmlFor="date" >
            <h3>Entry Date:</h3>
          </label>
          <input
            className="progress-form__input"
            type="date"
            id="entryDate"
            name="date"
            value={record.date}
            onChange={handleRecordInput}
          />
        </div>
        <div className="progress-form__container">
          <label className="progress-form__label" htmlFor="productType">
            <h3> Waste Type:</h3>
          </label>
          <select
            id="productType"
            name="productType"
            value={record.productType}
            onChange={handleRecordInput}
          >
            <option value="Plastic">Plastic</option>
            <option value="Glass">Paper</option>
            <option value="Cardboard">Glass</option>
            <option value="Paper">Metal</option>
            <option value="Organic Waste">Organic Waste</option>
            <option value="Plastic Waste">Electronics</option>
            <option value="Hazardous Waste">Textile</option>
          </select>
        </div>
        <div className="progress-form__container">
          <label className="progress-form__label" htmlFor="productName">
            <h3>Product:</h3>
          </label>
          <input
            className="progress-form__input"
            type="text"
            id="product"
            name="productName"
            value={record.productName}
            onChange={handleRecordInput}
          />
        </div>
        <div className="progress-form__container">
          <label htmlFor="quantity">
            <h3>Quantity:</h3>
          </label>
          <input
            className="progress-form__input"
            type="number"
            id="quantity"
            name="quantity"
            value={record.quantity}
            onChange={handleRecordInput}
          />
        </div>
        <button className="progress-form__btn" type="submit" disabled={loading}>
          <p className=" progress-form__btn-text">
            {loading ? "Uploading..." : "Set New Goal"}
          </p>
        </button>
      </form>
      {error && (
        <div className="progress-form__msg progress-form__msg--error">{error}</div>
      )}
      {success && (
        <div className="progress-form__msg progress-form__msg--success">{success}</div>
      )}
    </>
  );
}

export default TrackerForm;
