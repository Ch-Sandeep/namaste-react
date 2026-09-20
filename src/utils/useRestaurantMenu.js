import { useState, useEffect } from "react";
import { CORS_URL, MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        CORS_URL + encodeURIComponent(MENU_API_URL + resId),
      );
      const jsonData = await data.json();
      //   console.log(jsonData?.data);

      setResInfo(jsonData?.data);
    } catch (err) {
      console.log(err);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
