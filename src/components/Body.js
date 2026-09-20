import RestaurantCard from "./RestaurantCard";
import { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CORS_URL, RESTAURANTS_LIST_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  //Whenever there state variable updates, React triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Rendered", listOfRestaurants);

  const fetchData = async () => {
    const data = await fetch(
      CORS_URL + encodeURIComponent(RESTAURANTS_LIST_URL),
    );

    const jsonData = await data.json();

    const restList =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restList);
    setFilteredRestaurants(restList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Conditional Rendering
  // if (!listOfRestaurants.length) {
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connectivity
      </h1>
    );

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-3 p-3">
          <input
            type="text"
            className="border border-solid"
            placeholder="Search for restaurants"
            // binding value of input box with the searchText state variable (Doing this as we need value of input box inside search button onClick func)
            value={searchText}
            // on values entered in input box, we set searchText
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 cursor-pointer rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
              );

              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-3 p-3 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 cursor-pointer rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => Number(restaurant.info.avgRating) > 4,
              );

              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="m-3 p-3 flex items-center">
          <label>UserName:</label>
          <input
            className="border border-black p-2 mx-2"
            value = {loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
          rating="4.5 Stars"
        /> */}
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
