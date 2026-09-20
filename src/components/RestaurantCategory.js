import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatgeory = ({ data, showIndex, onShow }) => {
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        {/* Accordion Header */}
        <div className="flex justify-between cursor-pointer" onClick={onShow}>
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length})
          </span>
          {showIndex ? (
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          ) : (
            <svg
              data-accordion-icon
              className="w-5 h-5 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          )}
        </div>
        {/* Accordion Body */}
        {showIndex && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCatgeory;
