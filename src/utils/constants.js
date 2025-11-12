
    const BASE_IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

    const DATA_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9905542&lng=77.7580827&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    //using our local server to fetch Swiggy data
    const RESTAURANT_URL = "http://localhost:5000/api/menu";

    // const RESTAURANT_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9905542&lng=77.7580827&restaurantId=384760&submitAction=ENTER";

    export {BASE_IMG_URL, DATA_URL, RESTAURANT_URL};