import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs w-150">{item.card.info.description}</p>
          </div>
          <div className="w-45 p-2">
            <img
              className="rounded-3xl"
              src={CDN_URL + item.card.info.imageId}
            />
            <button className="py-2 px-8 bg-white shadow-lg mx-8 text-green-700 font-bold rounded-lg cursor-pointer hover:bg-gray-200">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
