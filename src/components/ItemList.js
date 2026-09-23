import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action to redux store
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
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
            <button
              className="py-2 px-8 bg-white shadow-lg mx-8 text-green-700 font-bold rounded-lg cursor-pointer hover:bg-gray-200"
              onClick={() => {
                handleAddItem(item);
              }}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
