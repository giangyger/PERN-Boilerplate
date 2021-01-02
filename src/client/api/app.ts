import axios from "axios";

const fetchApp = async () => {
  try {
    const { data: app } = await axios.get("https://example.com");
    return app;
  } catch (error) {
    console.error(error);
  }
};

export default { fetchApp };
