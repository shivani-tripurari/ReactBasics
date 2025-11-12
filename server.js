import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
const PORT = 5000;

/**
 * Route: /api/menu
 * Fetch Swiggy menu by restaurantId, lat, lng
 * Example:
 * http://localhost:5000/api/menu?restaurantId=65769&lat=12.9905542&lng=77.7580827
 */
app.get("/api/menu", async (req, res) => {
  try {
    const {
      lat = "12.9905542",
      lng = "77.7580827",
      restaurantId = "65769",
    } = req.query;

    const url = "https://cors-anywhere.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER"

    const response = await axios.get(url, {
      headers: {
        "authority": "cors-anywhere.com",
        "method": "GET",
        "scheme": "https",
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br, zstd",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "platform": "dweb",
        "priority": "u=1, i",
        "referer": `https://www.swiggy.com/city/bangalore/burger-king-itpl-main-road-whitefield-rest${restaurantId}`,
        "sec-ch-ua": `"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"`,
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": `"Windows"`,
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
        "user-id": "178136185",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("❌ Error fetching Swiggy menu:", error.message);
    res.status(500).json({
      error: "Failed to fetch menu data from Swiggy",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Express server running at http://localhost:${PORT}`);
});
