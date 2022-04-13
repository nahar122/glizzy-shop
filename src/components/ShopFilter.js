import React from "react";

export default function ShopFilter() {

  return (
    <div className="filter-box-container">
      <div className="filter-box">
        <div className="filter-type-box">
          <h2 className="box-titles">Price:</h2>
          <div className="all-box-selections">
            <div className="filter-item-container">
              <input type="checkbox"></input>
              <p>$ 0-5</p>
            </div>
            <div className="filter-item-container">
              <input type="checkbox"></input>
              <p>$ 5-10</p>
            </div>
            <div className="filter-item-container">
              <input type="checkbox"></input>
              <p>$ 10-15</p>
            </div>
            <div className="filter-item-container">
              <input type="checkbox"></input>
              <p>$ 15-20</p>
            </div>
            <div className="filter-item-container">
              <input type="checkbox"></input>
              <p>$ 20-25</p>
            </div>
          </div>
        </div>

        <div className="filter-type-box">
          <h2 className="box-titles">Color:</h2>
          <div className="all-box-selections">
            <div className="filter-item-container">
              <input type="checkbox" name="color-check"></input>
              <p>Black</p>
            </div>
            <div className="filter-item-container">
              <input type="checkbox" name="color-check"></input>
              <p>White</p>
            </div>
            <div className="filter-item-container">
              <input type="checkbox" name="color-check"></input>
              <p>Green</p>
            </div>
            <div className="filter-item-container">
              <input type="checkbox" name="color-check"></input>
              <p>Blue</p>
            </div>
            <div className="filter-item-container">
              <input type="checkbox" name="color-check"></input>
              <p>Red</p>
            </div>
          </div>
        </div>

        <div className="filter-type-box">
          <h2 className="box-titles">Size:</h2>
          <div className="all-box-selections">
            <div className="filter-item-container">
              <input type="checkbox" name="size-check"></input>
              <p>Extra Small</p>
            </div>
            <div className="filter-item-container">
              <input type="checkbox" name="size-check"></input>
              <p>Small</p>
            </div>
            <div className="filter-item-container">
              <input type="checkbox" name="size-check"></input>
              <p>Medium</p>
            </div>
            <div className="filter-item-container">
              <input type="checkbox" name="size-check"></input>
              <p>Large</p>
            </div>
            <div className="filter-item-container">
              <input type="checkbox" name="size-check"></input>
              <p>Extra Large</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}