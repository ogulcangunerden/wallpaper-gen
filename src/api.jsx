import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID m8TasjkvIv5GCfy_U22nBfxqTApYCBrqCdjfupPmhr8",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
