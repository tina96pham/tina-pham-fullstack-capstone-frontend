import "./TrackerForm.scss";
import { useTrackProgress } from "../../utils/useFormHandler";
import { useState } from "react";

function TrackerForm({setFormOpen}) {
  const {
    record,
    success,
    loading,
    error,
    handleRecordInput,
    handleRecordSubmit,
  } = useTrackProgress();

  return (
    <>
      <h2 className="form__header">
        Enter your waste info to keep track of your habit
      </h2>
      <form className="progress-form" onSubmit={handleRecordSubmit}>
        <div className="progress-form__container">
          <label className="progress-form__label" htmlFor="date">
            <p className="progress-form__label">Entry Date:</p>
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
            <p className="progress-form__label"> Waste Type:</p>
          </label>
          <select
            className="progress-form__input"
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
            <p className="progress-form__label">Product:</p>
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
          <label className="progress-form__label" htmlFor="quantity">
            <p className="progress-form__label">Quantity:</p>
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
        <div className="progress-form__btn-container">
          <button className="progress-form__cancel" onClick={()=>{setFormOpen(false)}}>
            <p className=" progress-form__btn-text ">Cancel</p>
          </button>
          <button
            className="progress-form__submit"
            type="submit"
            disabled={loading}
          >
            <p className=" progress-form__btn-text">
              {loading ? "Uploading..." : "Set New Goal"}
            </p>
          </button>
        </div>
      </form>
      {error && (
        <div className="progress-form__msg progress-form__msg--error">
          {error}
        </div>
      )}
      {success && (
        <div className="progress-form__msg progress-form__msg--success">
          {success}
        </div>
      )}
    </>
  );
}

export default TrackerForm;
