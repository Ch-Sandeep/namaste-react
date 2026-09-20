import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    props?.resData?.info;
  const context = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-67 bg-gray-100 rounded-lg hover:bg-gray-300">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="pb-2">{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4 className="py-3 font-bold">User: {context.loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component

//Input :- RestaurantCard, Returns :- RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
